import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Layout } from './components/PageTransition'
import { LandingPage } from './pages/LandingPage'
import { MenuPage } from './pages/MenuPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cardapio" element={<MenuPage />} />
            <Route path="/produto/:id" element={<ProductDetailPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/finalizar" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
