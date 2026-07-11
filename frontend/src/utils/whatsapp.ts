import type { CartItem } from '../context/CartContext'
import { formatCurrency } from './format'

export const WHATSAPP_NUMBER = '5518997314496'
export const DELIVERY_FEE = 8

export type PaymentMethod = 'pix' | 'dinheiro'
export type LogisticsMethod = 'delivery' | 'pickup'

export interface CheckoutData {
  name: string
  phone: string
  logistics: LogisticsMethod
  address?: string
  cep?: string
  complement?: string
  payment: PaymentMethod
}

export function buildWhatsAppUrl(
  items: CartItem[],
  checkout: CheckoutData,
  subtotal: number,
  total: number,
): string {
  const lines: string[] = [
    '*Novo Pedido — Atelier du Pavé*',
    '',
    `*Cliente*: ${checkout.name}`,
    `*Telefone*: ${checkout.phone}`,
    '',
    '*Itens*:',
  ]

  items.forEach((item) => {
    let line = `• ${item.quantity}x ${item.name} — ${formatCurrency(item.unitPrice * item.quantity)}`
    if (item.addons.length > 0) {
      line += `\n  _Adicionais: ${item.addons.map((a) => a.name).join(', ')}_`
    }
    if (item.observations) {
      line += `\n  _Obs: ${item.observations}_`
    }
    lines.push(line)
  })

  lines.push('')
  lines.push(`*Subtotal*: ${formatCurrency(subtotal)}`)

  if (checkout.logistics === 'delivery') {
    lines.push(`*Taxa de Entrega*: ${formatCurrency(DELIVERY_FEE)}`)
    lines.push(`*Endereço*: ${checkout.address}`)
    if (checkout.cep) lines.push(`*CEP*: ${checkout.cep}`)
    if (checkout.complement) lines.push(`*Complemento*: ${checkout.complement}`)
  } else {
    lines.push('*Retirada na loja* — Unidade Matriz')
  }

  lines.push('')
  lines.push(`*Total*: ${formatCurrency(total)}`)
  lines.push('')
  lines.push(`*Pagamento*: ${checkout.payment === 'pix' ? 'PIX' : 'Dinheiro'}`)

  const message = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}
