import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from './Icon'
import { useCart } from '../context/CartContext'

interface HeaderProps {
  showBack?: boolean
  showMenu?: boolean
  showNav?: boolean
  subtitle?: string
}

export function Header({ showBack, showMenu, showNav, subtitle }: HeaderProps) {
  const navigate = useNavigate()
  const { itemCount } = useCart()

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-background/80 backdrop-blur-md flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 sticky top-0 z-50"
    >
      <div className="flex items-center gap-4">
        {showBack ? (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="text-primary hover:opacity-80 transition-opacity"
          >
            <Icon name="arrow_back" className="text-2xl" />
          </motion.button>
        ) : showMenu ? (
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-primary text-2xl cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Icon name="menu" />
          </motion.button>
        ) : (
          <div className="w-6" />
        )}
      </div>

      <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary tracking-tight">
        Atelier du Pavé
      </h1>

      <div className="flex items-center gap-4">
        {showNav && (
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-primary font-bold hover:opacity-80 transition-opacity">Início</Link>
            <a href="/#historia" className="text-on-surface-variant hover:opacity-80 transition-opacity">Nossa História</a>
            <a href="/#favoritos" className="text-on-surface-variant hover:opacity-80 transition-opacity">Favoritos</a>
            <a href="/#contato" className="text-on-surface-variant hover:opacity-80 transition-opacity">Contato</a>
          </nav>
        )}
        {subtitle && (
          <span className="hidden md:block text-on-surface-variant font-label-md">{subtitle}</span>
        )}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/carrinho')}
          className="relative text-primary hover:opacity-80 transition-opacity"
        >
          <Icon name="shopping_bag" className="text-2xl" />
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-caramel-rich text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold"
            >
              {itemCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.header>
  )
}
