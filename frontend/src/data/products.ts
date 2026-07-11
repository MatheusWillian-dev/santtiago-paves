export type Category = 'Doces' | 'Porções' | 'Opções' | 'Sobremesas'

export interface Addon {
  id: string
  name: string
  price: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: Category
  badge?: string
  tagline?: string
  addons?: Addon[]
}

export const CATEGORIES: Category[] = ['Doces', 'Porções', 'Opções', 'Sobremesas']

export const DEFAULT_ADDONS: Addon[] = [
  { id: 'nutella', name: 'Extra Nutella', price: 6 },
  { id: 'morangos', name: 'Morangos Frescos', price: 4.5 },
  { id: 'chocolate', name: 'Raspas de Chocolate Meio Amargo', price: 3 },
]

export const PRODUCTS: Product[] = [
  {
    id: 'pave-classico',
    name: 'Pavé Clássico',
    description: 'Camadas de biscoito artesanal embebido em licor fino, creme de baunilha Bourbon e ganache belga.',
    price: 24.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVetiQBeCn35xj8dT4TdEmMYcUy8CZA0sca4YcKJ3zGkjRwRlWzxqouoQih0jLquCXnEyhqblt4MQI8UN2ozlmgWja2q8_v--Ar4Ai7zTb--W_ZZkmEb5O8w2SxZcNTj7sN0cjFYCAddKU9LZ0wgVsMyDWHdAIQJHDFNsKEo99U4UfaijFkrQ9sHD1NRlwU375trhfqcpXG7lEOJ_JarKrKKewgIstpVtQcASxFTd_sWoOUMhicAJU',
    category: 'Doces',
    badge: 'Mais Vendido',
    tagline: 'Destaque da Casa',
    addons: DEFAULT_ADDONS,
  },
  {
    id: 'pave-pistache',
    name: 'Pavé de Pistache',
    description: 'Creme de pistache iraniano, praliné crocante e chocolate branco 32% cacau.',
    price: 32,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJMH9KLco967xyd8t5MSpRrF6oeghSKmcENnGt2RB7T3LHD_WUrKplfoP6U5QPqGegWmJ9WlYtT4IJO0koTl14kqmCkHoo1voq21W-G1Fd-uSsjr0hvcMxOnIBdkH9rG9XUGvWGdpPCTBnxFQYhV44te9J1wHTiZV6Ab3XdmZwrQnLAWES0f7p9LBQlDrEOcHHXxMmHDpVAHfhtpzV3RTGcnsVHyv7VF9OcA1_stf_tmp0N7am7wWR',
    category: 'Doces',
    addons: DEFAULT_ADDONS,
  },
  {
    id: 'caramelo-salgado',
    name: 'Caramelo Salgado',
    description: 'Toffee de caramelo com flor de sal, mousse de chocolate meio amargo e biscoito de amêndoas.',
    price: 28.5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY0JT-nkhz-kthXQGUaDTh_j5tiuwJevkLuIviT6S9mXdhBoRdrbQYVTlGzDoE9GQZC74W_Jyg8nV9XjdRw114E_jzfG_ncEIN9SFcJk3lreC9mSu4ajVOAjpyhIEY9hvkvT_5jOyKMUgUZl-Dn2ZZZy2n78ymX3FJUZXFD8H_h92d9Lz5JgT3p0irK5xlh1r6sEkd24zertKWvd6zQf4ad5qEEIVgsUOIHKnWGIqG78C6QEwxwaF_',
    category: 'Doces',
    addons: DEFAULT_ADDONS,
  },
  {
    id: 'frutas-vermelhas',
    name: 'Frutas Vermelhas',
    description: 'Coulis de morangos e framboesas, creme de mascarpone leve e raspas de limão siciliano.',
    price: 30,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoWClEFDxziMkeuVUiSbfreXvaRIbZQEd6elSky9SEfzcrNmK_nL_O7o8xZ4aSHwNlrue3ohSfCo8Nw85h04xSU5YIlBWnDB-1Y7WNgpdC5-2B1umbm4GQvWLUiS1jLwbyHLlJF9yujnGfFdweFWP_ZFeALSztPEXI6Tp8jwbyYo3m7PihbAUVYd9fo9tHxHVqxQTDCDafSiW2WL8JTO5eBPtUcDmeIyUJdd2n-DVQ4RjxS5Kgbvsw',
    category: 'Doces',
    addons: DEFAULT_ADDONS,
  },
  {
    id: 'pave-chocolate-belga',
    name: 'Pavé de Chocolate Belga',
    description: 'Nossa versão clássica e artesanal. Camadas intercaladas de biscoito amanteigado embebido em calda secreta, creme de chocolate belga 54% cacau e finalizado com uma generosa camada de ganache sedosa.',
    price: 38.9,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8tuiphELWwwmV8A4zMO2aLjZ5GYbF27ED5vOagx4VJk261hxcWRs5S6y-iSW9x1bupnaNkAUycz7XCvyOh2OUAqhhF_TBhV6MaEP0VwjxkoDZH3qjJA68Rfwf2mWI69dy-XflrBIsstEVsvWGIqGEvtTTKGow4_SGaudeYWSwqYEkqKNh8UhLpdE5PNFFFtAyN2mLxSDo3cj2HXqJL6zyiQxgOQstVI_v5MjDH30eYKXS_9i1C0wQ',
    category: 'Sobremesas',
    tagline: 'Destaque da Casa',
    addons: DEFAULT_ADDONS,
  },
  {
    id: 'pave-classico-dor',
    name: "Pavé Clássico d'Or",
    description: 'Nossa receita original com biscoito champanhe artesanal e creme de baunilha bourbon.',
    price: 28,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHk8ztEcJNQ87pBZGtp00zLjaMCEo_UIdMqiClLMWjZHkgGFl7c5ijG8ARRu9bB0eCB0BS07cDV2YjHNXt0YcdO35aLxnYd9oz70I5bsx8R1zwl1-rJ3bNYVuki3DgLR9bQE71usRnJl01YKQv-fEui_mxOX-s0fsKJ48yQ8ldsTynqtZszFw0UQzEFm8ZKCeQxufO-I72fhp8S-FmiPZcALT8k1cIBvQHm2eSO00xdDQs7wmecziC',
    category: 'Sobremesas',
    badge: 'BEST SELLER',
    addons: DEFAULT_ADDONS,
  },
  {
    id: 'porcao-individual',
    name: 'Porção Individual (250g)',
    description: 'Porção generosa para saborear sozinho ou compartilhar. Embalagem premium.',
    price: 18,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNJwr8jIc28-es_rPDW2b7xlx2Nw5czdoEdTYRbTb2XKsplm-arM_ISXpJs-7iD0DyXjuZmOV9A13F55u5IOaD1ui090L_FUy0pmzwD0oRG3_lEVu3T7Btfsr7dMYpkMhbmnvQ1mbIUe_cvDIwczGaq4Zxbe-pRJobRy3y_n9Q9-dUYsnxfrmqewfNGVrFvXr26lCoSNQFB4dOr3D0losp9Kfthr96XaN4ZRww61rsg4pn-cThNi-R',
    category: 'Porções',
  },
  {
    id: 'porcao-familia',
    name: 'Porção Família (500g)',
    description: 'Ideal para reuniões e celebrações. Serve até 6 pessoas.',
    price: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtJDNVajAY9Ub89Yz83CuKo3iPzaCtnEg0iYxq4tGCtvQiXf8swJTFbWvEIGZ59o-sML4ZbnkvrdgJjSr_lY7RhyOMd58hw6xknjx2JKeVRe7R93gQ6W6qJvi0BR98OP04NPmIkKSmeFFDA_FmPQUWlWAielx9SBk5rlWQBu3l_CFxzX2QdWhVOvzXXp3eB_-1_gG5E1HcokdLi86JZ0bZgowWPyPOUuWYIRu-gudoAs8mgLaqnuk4',
    category: 'Porções',
  },
  {
    id: 'opcao-sem-lactose',
    name: 'Opção Sem Lactose',
    description: 'Adaptação da receita clássica com creme vegetal premium. Mesmo sabor, zero lactose.',
    price: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9cGQT3NRtY2M1QXmFxyY2KJJZIj9txeFYLvCoULUBnqHrKshKFgkZQ51KWm5Q96kh4vC5z8CJvBUMm9wnovQ6VmaDYoeUorLEkuzvIJOgfaWvDJZm9u3DrtFZVo5jI2Qc_4_TDBu3-K_8Nz3IdJ1p6hF4GxIboFa-vqoVq93BJCUEV15oVT6qAQf0XJ-kfKlSHs-vaTGA5XTKuqR6ifkcl_n1qiZC6dQ0Zz2P9jVcMJwPOj0iYduO',
    category: 'Opções',
  },
  {
    id: 'opcao-vegano',
    name: 'Opção Vegana',
    description: 'Versão 100% vegana com chocolate amargo e creme de coco artesanal.',
    price: 6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCmqiNxgpQtVhew1Ojt2c9jOrEJkzHb1k5fv6jZ3RZCwHENiFTDvp7Er6aRZIvMjMC6HP-kasi5HGAEZK4LtHp37crveQ7MD74_lsxBh0AbxCYJ-IYmWRWCy3k-avm3JomRY-8OeRlPtve4Mws-ZcS2JC1alG0ZVPPy5V-4It53aM_K7yDLrCpgLL_PepMnr2ypcbFpDZD1gyDyG23TURWUHihAUs95sYGvFcGw8ahyfpMPTFaxOYB',
    category: 'Opções',
  },
]

export const FAVORITES = PRODUCTS.filter((p) =>
  ['pave-classico-dor', 'pave-pistache', 'caramelo-salgado'].includes(p.id),
)

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}
