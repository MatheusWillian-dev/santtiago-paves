import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Addon } from '../data/products'

export interface CartItem {
  cartId: string
  productId: string
  name: string
  description: string
  image: string
  unitPrice: number
  basePrice: number
  quantity: number
  addons: Addon[]
  observations: string
}

interface AddToCartParams {
  productId: string
  name: string
  description: string
  image: string
  basePrice: number
  quantity: number
  addons: Addon[]
  observations: string
}

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addItem: (params: AddToCartParams) => void
  removeItem: (cartId: string) => void
  updateQuantity: (cartId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

function makeCartId(productId: string, addons: Addon[], observations: string): string {
  const addonKey = addons.map((a) => a.id).sort().join(',')
  return `${productId}::${addonKey}::${observations.trim()}`
}

function calcUnitPrice(basePrice: number, addons: Addon[]): number {
  return basePrice + addons.reduce((sum, a) => sum + a.price, 0)
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((params: AddToCartParams) => {
    const cartId = makeCartId(params.productId, params.addons, params.observations)
    const unitPrice = calcUnitPrice(params.basePrice, params.addons)

    setItems((prev) => {
      const existing = prev.find((i) => i.cartId === cartId)
      if (existing) {
        return prev.map((i) =>
          i.cartId === cartId
            ? { ...i, quantity: i.quantity + params.quantity }
            : i,
        )
      }
      return [
        ...prev,
        {
          cartId,
          productId: params.productId,
          name: params.name,
          description: params.description,
          image: params.image,
          unitPrice,
          basePrice: params.basePrice,
          quantity: params.quantity,
          addons: params.addons,
          observations: params.observations,
        },
      ]
    })
  }, [])

  const removeItem = useCallback((cartId: string) => {
    setItems((prev) => prev.filter((i) => i.cartId !== cartId))
  }, [])

  const updateQuantity = useCallback((cartId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.cartId !== cartId))
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.cartId === cartId ? { ...i, quantity } : i)),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({ items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }),
    [items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
