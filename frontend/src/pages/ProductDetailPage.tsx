import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Icon } from '../components/Icon'
import { getProductById, type Addon } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/format'

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = getProductById(id ?? '')

  const [quantity, setQuantity] = useState(1)
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([])
  const [observations, setObservations] = useState('')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-on-surface-variant mb-4">Produto não encontrado.</p>
          <button onClick={() => navigate('/cardapio')} className="text-caramel-rich font-label-md">Voltar ao cardápio</button>
        </div>
      </div>
    )
  }

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0)
  const unitTotal = product.price + addonsTotal
  const displayTotal = unitTotal * quantity

  const toggleAddon = (addon: Addon) => {
    setSelectedAddons((prev) =>
      prev.some((a) => a.id === addon.id)
        ? prev.filter((a) => a.id !== addon.id)
        : [...prev, addon],
    )
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      basePrice: product.price,
      quantity,
      addons: selectedAddons,
      observations,
    })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      navigate('/cardapio')
    }, 1200)
  }

  return (
    <>
      <Header showBack />
      <main className="max-w-container-max mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-desktop mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group overflow-hidden rounded-xl h-[400px] md:h-[600px]"
          >
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} src={product.image} />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full card-shadow text-primary"
            >
              <Icon name="favorite" filled className="text-xl" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col space-y-8"
          >
            <div>
              {product.tagline && (
                <span className="text-caramel-rich font-label-md uppercase tracking-widest mb-2 block">{product.tagline}</span>
              )}
              <h2 className="font-display-lg text-primary mb-2">{product.name}</h2>
              <p className="text-primary text-headline-sm font-semibold">{formatCurrency(product.price)}</p>
              <p className="mt-6 text-on-surface-variant font-body-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="h-px bg-outline-variant/30" />

            {product.addons && product.addons.length > 0 && (
              <section>
                <h3 className="font-headline-sm text-primary mb-6">Personalize seu momento</h3>
                <div className="grid grid-cols-1 gap-4">
                  {product.addons.map((addon) => {
                    const checked = selectedAddons.some((a) => a.id === addon.id)
                    return (
                      <motion.label
                        key={addon.id}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className={`flex items-center justify-between p-4 rounded-lg bg-surface-container-low border cursor-pointer transition-all ${
                          checked ? 'border-caramel-rich/50 bg-caramel-rich/5' : 'border-transparent hover:border-caramel-rich/30'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleAddon(addon)}
                            className="w-5 h-5 rounded text-primary-container focus:ring-primary-container border-outline"
                          />
                          <span className="font-body-md text-primary">{addon.name}</span>
                        </div>
                        <span className="text-on-surface-variant font-label-md">+ {formatCurrency(addon.price)}</span>
                      </motion.label>
                    )
                  })}
                </div>
              </section>
            )}

            <section>
              <h3 className="font-headline-sm text-primary mb-4">Observações</h3>
              <textarea
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                className="w-full min-h-[100px] p-4 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-caramel-rich/20 placeholder:text-outline text-on-surface font-body-md resize-none"
                placeholder="Alguma restrição ou pedido especial? Escreva aqui..."
              />
            </section>
          </motion.div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-lg border-t border-outline-variant/10 px-margin-mobile md:px-margin-desktop py-6 z-50">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center bg-surface-container-high rounded-full p-1 w-full md:w-auto">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-12 h-12 flex items-center justify-center text-primary hover:bg-surface-container-lowest rounded-full transition-colors"
            >
              <Icon name="remove" />
            </motion.button>
            <motion.span
              key={quantity}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="w-12 text-center text-primary font-bold text-lg"
            >
              {quantity}
            </motion.span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuantity((q) => q + 1)}
              className="w-12 h-12 flex items-center justify-center text-primary hover:bg-surface-container-lowest rounded-full transition-colors"
            >
              <Icon name="add" />
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            animate={{
              backgroundColor: added ? '#A3B18A' : '#4a312d',
            }}
            className="w-full md:w-auto md:min-w-[320px] text-on-primary py-4 px-10 rounded-lg font-body-lg font-semibold flex items-center justify-center gap-3 shadow-lg shadow-primary-container/20 transition-all"
          >
            <motion.span
              key={added ? 'added' : 'add'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {added ? 'Adicionado!' : 'Adicionar ao Carrinho'}
            </motion.span>
            {!added && (
              <>
                <span className="opacity-40">•</span>
                <span>{formatCurrency(displayTotal)}</span>
              </>
            )}
          </motion.button>
        </div>
      </footer>
    </>
  )
}
