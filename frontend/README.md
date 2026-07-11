# Atelier du Pavé — Cardápio Digital

Cardápio digital em React + Vite + Tailwind, baseado no design exportado do Stitch.

## Como rodar

```bash
cd atelier-du-pave
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Rotas

| Rota | Tela |
|------|------|
| `/` | Landing Page |
| `/cardapio` | Cardápio com abas de categoria |
| `/produto/:id` | Detalhe do produto |
| `/carrinho` | Carrinho |
| `/finalizar` | Checkout + WhatsApp |

## Funcionalidades

- Carrinho funcional (adicionar, remover, alterar quantidade, subtotal/total)
- Abas de categoria (Doces, Porções, Opções, Sobremesas — sem Bebidas)
- Busca de produtos no cardápio
- Personalização com adicionais e observações
- Checkout com entrega ou retirada
- Pagamento: **PIX** ou **Dinheiro** (cartão removido)
- Envio do pedido via WhatsApp (`wa.me`)

## Configurar WhatsApp

Edite o número em `src/utils/whatsapp.ts`:

```ts
export const WHATSAPP_NUMBER = '5511999999999'
```

Use o formato internacional sem `+` (ex: `5511987654321`).
