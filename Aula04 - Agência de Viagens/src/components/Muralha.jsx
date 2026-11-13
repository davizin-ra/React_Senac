import Styles from './css/Muralha.module.css'
import ComponentProps from './ComponentProps.jsx'
import PagamentoPix from './PagamentoPix.jsx'
import BandeiraChina from '../assets/imagens/bandeira_china.svg'

// Página da Muralha da China, usando o mesmo formato das outras viagens.
function Muralha() {
  return (
    <section className={Styles.fundo_muralha}>
      <h1>Muralha da China: história entre as montanhas</h1>
      <div className={Styles.informacoes}>
        <ComponentProps
          lugar="Muralha da China"
          texto="Caminhe por trechos da muralha, veja as torres construídas entre as montanhas e conheça alguns dos lugares históricos de Pequim."
          bandeira={BandeiraChina}
          destaques={['Torres históricas', 'Trilhas nas montanhas', 'Pequim']}
        />
        <PagamentoPix destino="Muralha da China" />
      </div>
    </section>
  )
}

export default Muralha
