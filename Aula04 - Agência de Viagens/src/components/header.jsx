import { NavLink } from 'react-router-dom'
import Styles from './css/header.module.css'
import Logo from '../assets/imagens/viagens.jpg'
import Busca from './Busca.jsx'
import { destinos } from '../data/destinos.js'

function Header() {
  return (
    <header className={Styles.header}>
      {/* Clicar na logo também leva para a página inicial. */}
      <NavLink to="/" className={Styles.logo} aria-label="Ir para a página inicial">
        <img src={Logo} alt="Logo da agência" />
      </NavLink>
      <nav className={Styles.menu} aria-label="Menu principal">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? Styles.ativo : undefined}>
              Home
            </NavLink>
          </li>
          {/* A mesma lista de destinos alimenta o menu e a página inicial. */}
          {destinos.map((destino) => (
            <li key={destino.slug}>
              <NavLink to={destino.rota} className={({ isActive }) => isActive ? Styles.ativo : undefined}>
                {destino.nome}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* É só um campo visual: dá para digitar, mas ele não faz uma busca. */}
      <Busca />
    </header>
  )
}

export default Header
