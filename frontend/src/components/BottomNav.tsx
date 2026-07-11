import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'

const NAV_ITEMS = [
  { path: '/cardapio', icon: 'restaurant_menu', label: 'Cardápio' },
  { path: '/', icon: 'favorite', label: 'Favoritos', hash: '#favoritos' },
  { path: '/carrinho', icon: 'receipt_long', label: 'Pedidos' },
  { path: '/cardapio', icon: 'person', label: 'Perfil' },
]

export function BottomNav() {
  const location = useLocation()

  const isActive = (_path: string, index: number) => {
    if (index === 0) return location.pathname === '/cardapio'
    if (index === 2) return location.pathname === '/carrinho' || location.pathname === '/finalizar'
    return false
  }

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[60] flex justify-around items-center px-4 py-3 md:hidden bg-surface-container shadow-[0_-4px_20px_0_rgba(74,49,45,0.06)] rounded-t-xl">
      {NAV_ITEMS.map((item, index) => {
        const active = isActive(item.path, index)
        const to = item.hash && location.pathname === '/' ? item.hash : item.path

        return (
          <Link key={item.label} to={to}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center justify-center transition-all duration-200 ${
                active
                  ? 'bg-primary text-on-primary rounded-full px-4 py-1 shadow-md'
                  : 'text-on-secondary-container opacity-70 hover:bg-primary-container/20 p-2 rounded-lg'
              }`}
            >
              <Icon name={item.icon} filled={active && index === 2} />
              <span className="font-label-sm text-[10px] mt-0.5">{item.label}</span>
            </motion.div>
          </Link>
        )
      })}
    </nav>
  )
}
