import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BottomNav } from '../components/BottomNav'
import { CartBar } from '../components/CartBar'
import { CategoryTabs } from '../components/CategoryTabs'
import { ProductCard } from '../components/ProductCard'
import { Icon } from '../components/Icon'
import { PRODUCTS, type Category } from '../data/products'

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Doces')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = p.category === activeCategory
      const matchesSearch = search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <>
      <Header />
      <main className="max-w-container-max mx-auto pb-32">
        <section className="px-margin-mobile md:px-margin-desktop py-6">
          <div className="relative group">
            <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-caramel-rich transition-colors" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl font-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-tertiary-container transition-all"
              placeholder="Encontre seu pavé favorito..."
              type="text"
            />
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop mb-8">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </section>

        <section className="px-margin-mobile md:px-margin-desktop">
          <motion.div
            key={activeCategory + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <Icon name="search_off" className="text-4xl text-outline mb-4" />
                <p className="text-on-surface-variant font-body-md">Nenhum produto encontrado.</p>
              </div>
            )}
          </motion.div>
        </section>
      </main>
      <CartBar />
      <Footer compact />
      <BottomNav />
    </>
  )
}
