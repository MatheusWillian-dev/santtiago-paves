import { motion } from 'framer-motion'
import type { Category } from '../data/products'
import { CATEGORIES } from '../data/products'

interface CategoryTabsProps {
  active: Category
  onChange: (category: Category) => void
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-8 overflow-x-auto no-scrollbar py-2 border-b border-surface-variant/30">
      {CATEGORIES.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className="relative font-label-md whitespace-nowrap transition-colors pb-2"
          >
            <span className={isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}>
              {category}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-container rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
