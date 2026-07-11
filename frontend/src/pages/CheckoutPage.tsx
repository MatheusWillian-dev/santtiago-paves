import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/format'
import {
  buildWhatsAppUrl,
  DELIVERY_FEE,
  type CheckoutData,
  type LogisticsMethod,
  type PaymentMethod,
} from '../utils/whatsapp'

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.487l-.751 2.234 2.301-.733c.944.576 2.056.912 3.106.912 3.183 0 5.768-2.587 5.769-5.767 0-3.181-2.587-5.767-5.769-5.767zm3.391 8.221c-.142.399-.715.763-1.141.817-.355.045-.81.077-1.308-.083-.331-.106-1.181-.395-2.023-1.129-.739-.643-1.233-1.425-1.381-1.681-.148-.256-.015-.394.113-.522.115-.115.256-.298.384-.447.128-.149.17-.256.256-.426.085-.17.043-.32-.021-.447-.064-.128-.575-1.385-.788-1.895-.208-.499-.42-.43-.575-.438-.148-.008-.32-.01-.49-.01-.17 0-.447.064-.68.32-.234.256-.894.873-.894 2.129 0 1.256.915 2.47 1.043 2.64.128.17 1.8 2.75 4.359 3.854.61.263 1.084.42 1.454.539.612.195 1.168.167 1.607.102.49-.074 1.503-.615 1.716-1.21.213-.595.213-1.106.15-1.212-.064-.107-.234-.17-.511-.308zM12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
    </svg>
  )
}

const PAYMENT_OPTIONS: { id: PaymentMethod; icon: string; label: string; desc: string }[] = [
  { id: 'pix', icon: 'qr_code_2', label: 'Pix', desc: 'Instantâneo' },
  { id: 'dinheiro', icon: 'payments', label: 'Dinheiro', desc: 'Na entrega' },
]

export function CheckoutPage() {
  const navigate = useNavigate()
  const { items, subtotal, clearCart } = useCart()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [logistics, setLogistics] = useState<LogisticsMethod>('delivery')
  const [address, setAddress] = useState('')
  const [cep, setCep] = useState('')
  const [complement, setComplement] = useState('')
  const [payment, setPayment] = useState<PaymentMethod>('pix')

  const deliveryFee = logistics === 'delivery' ? DELIVERY_FEE : 0
  const total = subtotal + deliveryFee

  if (items.length === 0) {
    navigate('/carrinho')
    return null
  }

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      alert('Por favor, preencha seu nome e telefone.')
      return
    }
    if (logistics === 'delivery' && !address.trim()) {
      alert('Por favor, informe o endereço de entrega.')
      return
    }

    const checkout: CheckoutData = {
      name: name.trim(),
      phone: phone.trim(),
      logistics,
      address: address.trim(),
      cep: cep.trim(),
      complement: complement.trim(),
      payment,
    }

    const url = buildWhatsAppUrl(items, checkout, subtotal, total)
    window.open(url, '_blank')
    clearCart()
    navigate('/cardapio')
  }

  return (
    <>
      <Header showBack subtitle="Passo 2 de 2: Checkout" />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-12">
            {/* Identificação */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">1</span>
                <h2 className="font-headline-sm text-headline-sm text-primary">Identificação</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant ml-1">Nome Completo</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-caramel-rich rounded-xl px-4 py-4 transition-all"
                    placeholder="Como deseja ser chamado?"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant ml-1">WhatsApp / Telefone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-caramel-rich rounded-xl px-4 py-4 transition-all"
                    placeholder="(00) 00000-0000"
                    type="tel"
                  />
                </div>
              </div>
            </section>

            {/* Entrega */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">2</span>
                <h2 className="font-headline-sm text-headline-sm text-primary">Entrega ou Retirada</h2>
              </div>
              <div className="bg-surface-container-low p-1.5 rounded-2xl flex mb-8 max-w-sm">
                {(['delivery', 'pickup'] as LogisticsMethod[]).map((method) => (
                  <motion.button
                    key={method}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setLogistics(method)}
                    className={`flex-1 py-3 px-4 rounded-xl font-label-md transition-all flex items-center justify-center gap-2 ${
                      logistics === method
                        ? 'bg-primary text-on-primary shadow-lg'
                        : 'text-on-surface-variant hover:bg-surface-variant/50'
                    }`}
                  >
                    <Icon name={method === 'delivery' ? 'delivery_dining' : 'storefront'} className="text-[20px]" />
                    {method === 'delivery' ? 'Entrega' : 'Retirada'}
                  </motion.button>
                ))}
              </div>

              <motion.div
                key={logistics}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {logistics === 'delivery' ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 space-y-2">
                        <label className="font-label-md text-on-surface-variant ml-1">Endereço de Entrega</label>
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-caramel-rich rounded-xl px-4 py-4 transition-all"
                          placeholder="Rua, Número, Bairro"
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-md text-on-surface-variant ml-1">CEP</label>
                        <input
                          value={cep}
                          onChange={(e) => setCep(e.target.value)}
                          className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-caramel-rich rounded-xl px-4 py-4 transition-all"
                          placeholder="00000-000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-on-surface-variant ml-1">Complemento / Ponto de Referência</label>
                      <input
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                        className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-caramel-rich rounded-xl px-4 py-4 transition-all"
                        placeholder="Apt, Bloco, fundos..."
                        type="text"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 p-6 border-2 border-dashed border-outline-variant rounded-2xl bg-surface-container-lowest">
                    <div className="flex items-start gap-4">
                      <Icon name="location_on" className="text-caramel-rich" />
                      <div>
                        <p className="font-label-md text-primary">Atelier du Pavé - Unidade Matriz</p>
                        <p className="text-body-md text-on-surface-variant">Rua das Amêndoas, 124 - Jardim Europa</p>
                        <p className="text-label-sm text-on-surface-variant mt-2">Disponível para retirada em 45-60 min após aprovação.</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </section>

            {/* Pagamento - apenas PIX e Dinheiro */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">3</span>
                <h2 className="font-headline-sm text-headline-sm text-primary">Forma de Pagamento</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PAYMENT_OPTIONS.map((option) => (
                  <motion.label
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative flex flex-col items-center justify-center p-6 bg-surface-container-low rounded-2xl border-2 cursor-pointer transition-all"
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === option.id}
                      onChange={() => setPayment(option.id)}
                      className="absolute opacity-0 peer"
                    />
                    <div className={`absolute inset-0 rounded-2xl border-2 transition-all ${
                      payment === option.id ? 'border-caramel-rich bg-primary-container/5' : 'border-transparent'
                    }`} />
                    <Icon name={option.icon} className="text-caramel-rich mb-2 relative z-10" />
                    <span className="font-label-md text-primary relative z-10">{option.label}</span>
                    <span className="text-label-sm text-on-surface-variant relative z-10">{option.desc}</span>
                  </motion.label>
                ))}
              </div>
            </section>

            {/* WhatsApp CTA Mobile */}
            <div className="md:hidden pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-label-md flex items-center justify-center gap-3 shadow-xl hover:opacity-90 transition-all"
              >
                <WhatsAppIcon />
                Enviar pedido pelo WhatsApp
              </motion.button>
              <p className="text-center text-label-sm text-on-surface-variant mt-4 px-4 italic">
                Ao clicar, seu pedido será gerado e enviado diretamente para nosso atendimento.
              </p>
            </div>
          </div>

          {/* Resumo */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl p-8 checkout-card border border-surface-variant/30">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-8 border-b border-surface-variant pb-4">Resumo do Pedido</h3>
                <div className="space-y-6 mb-8">
                  {items.map((item) => (
                    <div key={item.cartId} className="flex gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-label-md text-primary">{item.name}</h4>
                          <span className="font-label-md text-primary">{formatCurrency(item.unitPrice * item.quantity)}</span>
                        </div>
                        {item.addons.length > 0 && (
                          <p className="text-label-sm text-on-surface-variant">{item.addons.map((a) => a.name).join(', ')}</p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-label-sm bg-surface-container px-2 py-0.5 rounded-full">Qtd: {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-6 border-t border-surface-variant">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  {logistics === 'delivery' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-between text-on-surface-variant"
                    >
                      <span>Taxa de Entrega</span>
                      <span className="text-pistachio-accent font-medium">{formatCurrency(DELIVERY_FEE)}</span>
                    </motion.div>
                  )}
                  <div className="flex justify-between text-display-lg-mobile font-display-lg-mobile text-primary pt-4">
                    <span>Total</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                    >
                      {formatCurrency(total)}
                    </motion.span>
                  </div>
                </div>

                <div className="hidden md:block mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-label-md flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <WhatsAppIcon />
                    Finalizar via WhatsApp
                  </motion.button>
                  <p className="text-center text-label-sm text-on-surface-variant mt-4 italic">
                    Você será redirecionado para concluir o pedido.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-8 text-on-surface-variant opacity-70">
                <Icon name="lock" className="text-[18px]" />
                <span className="text-label-sm">Seus dados estão seguros e criptografados.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer compact />
      <BottomNav />
    </>
  )
}
