import Lupa from '../assets/imagens/lupa.png'
import Styles from './css/Busca.module.css'

function Busca() {
  return (
    <div className={Styles.formulario}>
      <div className={Styles.buscaWrap}>
        <input
          type="search"
          name="destino"
          className={Styles.busca}
          placeholder="Buscar destino"
          aria-label="Buscar destino"
        />
        <span className={Styles.icone} aria-hidden="true">
          <img src={Lupa} alt="" className={Styles.lupa} />
        </span>
      </div>
    </div>
  )
}

export default Busca
