import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { FAVORITES } from '../data/products'
import { formatCurrency } from '../utils/format'
import { useCart } from '../context/CartContext'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  }),
}

export function LandingPage() {
  const { addItem } = useCart()

  return (
    <>
      <Header showMenu showNav />
      <main>
        {/* Hero */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Pavê artesanal"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcfdJu2wOmSHf1YlePWQEUAbrT0oB34E97qRxHdSYt1w0-gqJM8I7BGvkZQF1RxpmNnXPvR7HIrE264R6tmZOcJpcV4G6CmF1ddB4qDXUkeS5nAjiL0u3x7FW30pZ618ipYUs1dGcEIZ5Sd7MUG-lpXS8AYu5UNwE11a-IsqQd4ea17Bzi8r4EZm0A6J7AEXlNavwdMnshuNqT4R7JBtnoNLuFrZ0QOHBFLookqXOt46SgTKN-MxZ_"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          </div>
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="max-w-2xl"
            >
              <span className="text-caramel-rich font-label-md tracking-widest mb-4 block">TRADIÇÃO & REQUINTE</span>
              <h2 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">A Arte do Pavê Artesanal</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                Descubra camadas de história e sabor em cada colherada. Pavês feitos à mão com ingredientes premium e o tempo que a excelência exige.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/cardapio"
                    className="inline-block bg-primary-container text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-primary transition-all shadow-lg"
                  >
                    Ver Cardápio Online
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="border-2 border-caramel-rich text-caramel-rich px-8 py-4 rounded-lg font-label-md hover:bg-caramel-rich hover:text-white transition-all"
                >
                  Nossa Unidades
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* História */}
        <section className="py-24 bg-surface-container-low" id="historia">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="md:col-span-7 flex flex-col justify-center"
              >
                <motion.h3 variants={fadeUp} custom={0} className="font-headline-md text-headline-md text-primary mb-6">
                  Uma História que se Camufla em Sabor
                </motion.h3>
                <motion.p variants={fadeUp} custom={1} className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  O Atelier du Pavé nasceu do desejo de elevar o clássico pavê brasileiro ao patamar da alta confeitaria internacional. O que começou em uma pequena cozinha familiar, com receitas passadas por gerações, transformou-se em um refúgio para amantes de doces que buscam mais do que apenas açúcar: buscam uma experiência sensorial.
                </motion.p>
                <motion.p variants={fadeUp} custom={2} className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  Nossa técnica artesanal respeita o tempo de descanso de cada camada, garantindo que o creme de baunilha, o chocolate belga e as frutas frescas se fundam em uma harmonia perfeita.
                </motion.p>
                <motion.div variants={fadeUp} custom={3} className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-4 border-background overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Chef" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT_PpVEZQQgTo9r9GfBSSoaPX1T6c7TLXOIsg2JO7G9lg7-n-s3MZ4s1zuTxAyyA6aD1taf-UoL9qn8UvmsHM6AqtuJwdT5eAhWGDzRDpV3kiCqlUYqtmRnCRGR1xaKXNeSFJtxqAY7qu5cQ7u-pK4nUKld5F526lvJeklox5EC0Gln0rWohqUy32s4LdjUtWisX6zdnt4ciuRZITyiPucFAnzMtBwcU8rWY02oOK5XVRNn0e26nBr" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-caramel-rich flex items-center justify-center text-white">
                      <Icon name="star" />
                    </div>
                  </div>
                  <p className="text-sm italic text-on-surface-variant">"O segredo está no silêncio entre as camadas." — Chef Fundadora</p>
                </motion.div>
              </motion.div>
              <div className="md:col-span-5 grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-xl overflow-hidden shadow-xl transform translate-y-8"
                >
                  <img className="w-full h-full object-cover" alt="Ingredientes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYhqfcCXnRvL3rQ9-0jOgcxXmNJmr29Z_ZxjRWE_SwsHZDtCM9JvABGdGEz-FlunVvV8QeXm1BoYFZgdQm5S4ffB32BhLQfknIRNeC5ank0spnI0ckPW2CnsNL49WlEMsQhge6Cp5rdxkRuCp4IWd2csUyyoCcGRv6JPkrtBy7zvZfmGr64cprSDj-sx4QryUJD07CvsFyasM7KlYhfENS96I8cghYvChNxiMvpFX_LmoF5PM8oX_" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <img className="w-full h-full object-cover" alt="Preparo artesanal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGNr1zUJJVWB4_lKhpOC1QBDgDFTdZ9MMugYdtw_tN-JSGLSNLvm4BtM9ZAlliX83qy6aPSzhaLLPYCLuvFff8QR2wOl21NzV1sdCFMwMaJcsXHoNDptcwYniAPKip3Vi4QCMZs8sK6-ToKYaG3hu3wyssPzwt-gJjAW9YDRyZXiqxZ50cOTws1dxZTnncfGS9Q-gd17KBZ8cBm1BdDN9Pb2skAKQU6DmEtXIDk0qzqGzQKt8t6HnX" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Favoritos */}
        <section className="py-24" id="favoritos">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Nossos Favoritos</h3>
                <p className="text-on-surface-variant font-body-md">As criações mais amadas por nossos clientes.</p>
              </div>
              <Link to="/cardapio" className="text-caramel-rich font-label-md flex items-center gap-2 hover:underline transition-all">
                Explorar todo o cardápio
                <Icon name="arrow_right_alt" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {FAVORITES.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(74,49,45,0.04)] hover:shadow-[0_20px_40px_rgba(74,49,45,0.08)] transition-all duration-500"
                >
                  <div className="h-80 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} src={product.image} />
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">{product.badge}</div>
                    )}
                  </div>
                  <div className="p-8">
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">{product.name}</h4>
                    <p className="text-on-surface-variant font-body-md mb-6">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold text-xl">{formatCurrency(product.price)}</span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        onClick={() => addItem({
                          productId: product.id,
                          name: product.name,
                          description: product.description,
                          image: product.image,
                          basePrice: product.price,
                          quantity: 1,
                          addons: [],
                          observations: '',
                        })}
                        className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <Icon name="add" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiência */}
        <section className="py-24 bg-chocolate-dark text-cream-vanilla overflow-hidden relative">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="font-display-lg text-display-lg mb-8">A Experiência do Atelier</h3>
              <div className="space-y-8">
                {[
                  { icon: 'eco', title: 'Ingredientes Conscientes', desc: 'Trabalhamos apenas com produtores locais e cacau sustentável de origem controlada.' },
                  { icon: 'timer', title: 'Paciência Artesanal', desc: 'Nossos doces levam até 24 horas de preparo para atingir a textura perfeita.' },
                  { icon: 'workspace_premium', title: 'Exclusividade', desc: 'Lotes limitados produzidos diariamente para garantir o frescor absoluto.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4"
                  >
                    <Icon name={item.icon} className="text-caramel-rich text-3xl" />
                    <div>
                      <h5 className="font-bold text-xl mb-2">{item.title}</h5>
                      <p className="opacity-80">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-full border-2 border-caramel-rich/30 p-8 animate-spin-slow">
                <img className="w-full h-full object-cover rounded-full" alt="Embalagem premium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABh9hBa0R097RmszdJD8sMLqJ3buEvDXy-DPNz8h-ZBoCN8g6eqqRhqUjraipgMm3f-dPXuB1HUHOYLrx69qGI2FSGtVpOfjf8q2iSWemT6HEtAQ9shuDdwqp2E9f0j4q_zO_V0z0XfVYU8Ww9fHoyYBKGFIwN3QditlHPC98fw_aFroRAscIembpcygih3Tv68ZogDzLTP9Mw_AVa1_nv7UFjPX2dt9h39uZDwCDr1HLHebgz9yI4" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -left-10 glass-card p-6 rounded-xl shadow-2xl max-w-[200px]"
              >
                <p className="text-primary text-sm font-bold">"O melhor pavê que já provei na vida. A textura é indescritível."</p>
                <p className="text-caramel-rich text-xs mt-2">— Mariana S., Crítica Gastronômica</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
