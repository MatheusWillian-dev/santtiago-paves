import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/format'
import { Icon } from './Icon'

export function CartBar() {
  const { itemCount, subtotal } = useCart()
  const navigate = useNavigate()

  if (itemCount === 0) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-16 md:bottom-0 left-0 w-full z-50 bg-background/90 backdrop-blur-xl border-t border-surface-variant/30 px-margin-mobile md:px-margin-desktop py-5 flex items-center justify-between shadow-[0_-10px_40px_rgba(74,49,45,0.08)]"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <Icon name="shopping_basket" className="text-primary text-3xl" />
          <motion.span
            key={itemCount}
            initial={{ scale: 1.4 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-caramel-rich text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold"
          >
            {itemCount}
          </motion.span>
        </div>
        <div>
          <p className="text-label-sm text-on-surface-variant">Subtotal</p>
          <p className="font-headline-sm text-primary leading-none">{formatCurrency(subtotal)}</p>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/carrinho')}
        className="bg-primary text-white px-8 py-3 rounded-full font-label-md hover:bg-primary-container transition-all shadow-lg flex items-center gap-2"
      >
        Ver Sacola
        <Icon name="arrow_forward" className="text-sm" />
      </motion.button>
    </motion.div>
  )
}
