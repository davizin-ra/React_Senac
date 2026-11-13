import Styles from './css/PagamentoPix.module.css'

// Se receber um número, mostra como reais; se não, usa o texto ou deixa sob consulta.
function formatarValor(valor) {
  if (typeof valor === 'number') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor)
  }

  return valor || 'Sob consulta'
}

// Esse cartão só informa a forma de pagamento; não inicia nem confirma uma cobrança.
function PagamentoPix({ destino, valor }) {
  return (
    <aside className={Styles.cartao} aria-label={`Informações de pagamento para ${destino}`}>
      <p className={Styles.etiqueta}>Forma de pagamento</p>
      <h2>Pix</h2>
      <p className={Styles.linha}>
        Destino <strong>{destino}</strong>
      </p>
      <p className={Styles.linha}>
        Valor <strong>{formatarValor(valor)}</strong>
      </p>
      <p className={Styles.aviso}>
        Consulte valores, datas e a chave Pix com a agência antes de fechar a reserva.
      </p>
    </aside>
  )
}

export default PagamentoPix
