import Styles from './css/Aruba.module.css'
import ComponentProps from './ComponentProps.jsx'
import PagamentoPix from './PagamentoPix.jsx'
import BandeiraAruba from '../assets/imagens/bandeira_aruba.svg'

function Aruba() {
  return (
    <section className={Styles.fundo_aruba}>
      <h1>Aruba: praias e passeios pela ilha</h1>
      <div className={Styles.informacoes}>
        <ComponentProps
          lugar="Aruba"
          texto="Passe um dia na praia, conheça as ruas de Oranjestad e explore outras paisagens da ilha. Aruba combina mar, passeios e tempo para descansar."
          bandeira={BandeiraAruba}
          destaques={['Praias', 'Oranjestad', 'Passeios pela ilha']}
        />
        <PagamentoPix destino="Aruba" />
      </div>
    </section>
  )
}

export default Aruba
