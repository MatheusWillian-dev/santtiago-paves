import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8 bg-chocolate-dark text-cream-vanilla mt-20 mb-20 md:mb-0">
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="font-display-lg text-cream-vanilla">Atelier du Pavé</h2>
          <p className="font-body-md text-cream-vanilla/80 max-w-xs text-center md:text-left">
            © 2024 Atelier du Pavé. Artesanalmente doce. Transformando momentos em lembranças deliciosas.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <a href="/#historia" className="text-cream-vanilla/80 font-body-md hover:text-caramel-rich transition-colors">Nossa História</a>
          <Link to="/cardapio" className="text-cream-vanilla/80 font-body-md hover:text-caramel-rich transition-colors">Cardápio</Link>
          <a href="#" className="text-cream-vanilla/80 font-body-md hover:text-caramel-rich transition-colors">Privacidade</a>
          <a href="#" className="text-cream-vanilla/80 font-body-md hover:text-caramel-rich transition-colors">Contato</a>
        </div>
      </footer>
    )
  }

  return (
    <footer id="contato" className="bg-chocolate-dark text-cream-vanilla w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <h2 className="font-display-lg text-display-lg text-cream-vanilla mb-4">Atelier du Pavé</h2>
          <p className="opacity-70 font-body-md mb-6">Artesanalmente doce. Transformando tradição em momentos de luxo e prazer.</p>
          <div className="flex gap-4">
            {['camera', 'share', 'alternate_email'].map((icon) => (
              <a key={icon} href="#" className="w-10 h-10 rounded-full border border-cream-vanilla/20 flex items-center justify-center hover:bg-caramel-rich transition-colors">
                <Icon name={icon} className="text-xl" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-caramel-rich">Navegação</h4>
            <a href="/#historia" className="opacity-80 hover:text-caramel-rich transition-colors">Nossa História</a>
            <Link to="/cardapio" className="opacity-80 hover:text-caramel-rich transition-colors">Cardápio</Link>
            <a href="/#favoritos" className="opacity-80 hover:text-caramel-rich transition-colors">Favoritos</a>
            <a href="#" className="opacity-80 hover:text-caramel-rich transition-colors">Lojas</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-caramel-rich">Institucional</h4>
            {['Privacidade', 'Termos', 'Trabalhe Conosco', 'Franquias'].map((item) => (
              <a key={item} href="#" className="opacity-80 hover:text-caramel-rich transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-caramel-rich">Contato</h4>
            <span className="opacity-80 flex items-center gap-2">
              <Icon name="call" className="text-sm" /> (11) 9999-9999
            </span>
            <span className="opacity-80 flex items-center gap-2">
              <Icon name="mail" className="text-sm" /> contato@atelierdupave.com.br
            </span>
            <span className="opacity-80 flex items-center gap-2">
              <Icon name="location_on" className="text-sm" /> São Paulo, SP
            </span>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-cream-vanilla/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
        <p>© 2024 Atelier du Pavé. Artesanalmente doce.</p>
        <p>Desenvolvido com sofisticação.</p>
      </div>
    </footer>
  )
}
