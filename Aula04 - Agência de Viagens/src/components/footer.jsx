import { NavLink } from 'react-router-dom'
import Styles from './css/footer.module.css'
import { destinos } from '../data/destinos.js'

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.conteudo}>
        <p className={Styles.titulo}>Continue explorando</p>
        {/* Links rápidos para os mesmos destinos do menu. */}
        <nav className={Styles.destinos} aria-label="Destinos disponíveis no rodapé">
          {destinos.map((destino) => (
            <NavLink key={destino.slug} to={destino.rota}>
              {destino.nome}
            </NavLink>
          ))}
        </nav>
        <p className={Styles.nota}>
          Consulte valores, datas e condições antes de fechar a reserva.
        </p>
      </div>
    </footer>
  )
}

export default Footer
