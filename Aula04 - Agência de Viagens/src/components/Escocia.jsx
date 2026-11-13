import Styles from './css/Escocia.module.css'
import ComponentProps from './ComponentProps.jsx'
import PagamentoPix from './PagamentoPix.jsx'
import BandeiraEscocia from '../assets/imagens/bandeira_escocia.svg'

// Monta a página da Escócia com o fundo, o resumo do roteiro e o cartão informativo de Pix.
function Escocia() {
  return (
    <section className={Styles.fundo_escocia}>
      <h1>Escócia: castelos e paisagens das Highlands</h1>
      <div className={Styles.informacoes}>
        <ComponentProps
          lugar="Escócia"
          texto="Explore as ruas de Edimburgo, visite castelos históricos e reserve um tempo para conhecer as paisagens das Highlands. O roteiro tem 7 dias e 6 noites."
          bandeira={BandeiraEscocia}
          destaques={['Edimburgo', 'Castelos históricos', 'Highlands']}
        />
        <PagamentoPix destino="Escócia" />
      </div>
    </section>
  )
}

export default Escocia
