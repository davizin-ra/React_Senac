import { NavLink } from 'react-router-dom'
import { destinos } from '../data/destinos.js'
import Styles from './css/home.module.css'

function Home() {
  return (
    <main className={Styles.meio}>
      {/* A mala é uma imagem de apresentação; não é um botão. */}
      <div className={Styles.mala} role="img" aria-label="Mala pronta para uma viagem" />

      <section className={Styles.texto}>
        <p className={Styles.etiqueta}>Inspire-se para a próxima viagem</p>
        <h1>Escolha um destino e comece a planejar.</h1>
        <p className={Styles.descricao}>
          Castelos e trilhas na Escócia, as paisagens do Grand Canyon, a história
          da Muralha da China ou alguns dias de praia em Aruba. Veja qual combina
          com você.
        </p>

        {/* Os links vêm da lista de destinos para não precisar escrever cada um à mão. */}
        <nav className={Styles.destinos} aria-label="Destinos disponíveis">
          {destinos.map((destino) => (
            <NavLink key={destino.slug} to={destino.rota}>
              {destino.nome}
            </NavLink>
          ))}
        </nav>
      </section>
    </main>
  )
}

export default Home
