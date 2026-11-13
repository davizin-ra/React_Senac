import Styles from './css/GrandCanyon.module.css'
import ComponentProps from './ComponentProps.jsx'
import PagamentoPix from './PagamentoPix.jsx'
import BandeiraEstadosUnidos from '../assets/imagens/bandeira_estados_unidos.svg'

// Página do Grand Canyon: o texto e os destaques são passados ao cartão reutilizável.
function GrandCanyon() {
  return (
    <section className={Styles.fundo_grand_canyon}>
      <h1>Grand Canyon: mirantes e trilhas no Arizona</h1>
      <div className={Styles.informacoes}>
        <ComponentProps
          lugar="Grand Canyon"
          texto="Veja de perto as formações rochosas, escolha um mirante para acompanhar o pôr do sol e conheça as trilhas do parque no Arizona."
          bandeira={BandeiraEstadosUnidos}
          destaques={['Mirantes', 'Trilhas', 'Pôr do sol']}
        />
        <PagamentoPix destino="Grand Canyon" />
      </div>
    </section>
  )
}

export default GrandCanyon
