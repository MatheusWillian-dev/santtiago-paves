import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/format'
import { Icon } from './Icon'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      productId: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      basePrice: product.price,
      quantity: 1,
      addons: [],
      observations: '',
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4 }}
      onClick={() => navigate(`/produto/${product.id}`)}
      className="bg-surface-container-lowest rounded-xl overflow-hidden card-shadow group cursor-pointer transition-all duration-300"
    >
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className={`absolute top-4 right-4 text-white text-label-sm px-3 py-1 rounded-full backdrop-blur-sm ${
            product.badge === 'Mais Vendido' ? 'bg-pistachio-accent/90' : 'bg-white/90 text-primary'
          }`}>
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-headline-sm text-primary">{product.name}</h3>
          <span className="font-headline-sm text-caramel-rich">{formatCurrency(product.price)}</span>
        </div>
        <p className="text-on-surface-variant font-body-md line-clamp-2">{product.description}</p>
        <div className="flex justify-end mt-4">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleAdd}
            animate={{
              backgroundColor: added ? '#A3B18A' : '#4a312d',
            }}
            className="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-md transition-colors"
          >
            <motion.span
              key={added ? 'check' : 'add'}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              <Icon name={added ? 'check' : 'add'} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
