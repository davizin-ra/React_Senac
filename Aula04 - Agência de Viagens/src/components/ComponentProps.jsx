import Styles from './css/ComponentProps.module.css'

// Reaproveita o mesmo cartão nas viagens. Cada página passa os dados por props.
function ComponentProps({ lugar, texto, bandeira, destaques = [] }) {
  return (
    <section className={Styles.corpo_texto} aria-labelledby="roteiro-titulo">
      {/* A bandeira e a lista de destaques são opcionais. */}
      {bandeira && <img src={bandeira} alt={`Bandeira de ${lugar}`} className={Styles.img_props} />}
      <p className={Styles.etiqueta}>Sobre o destino</p>
      <h2 id="roteiro-titulo">Um roteiro por {lugar}</h2>
      <p className={Styles.descricao}>{texto}</p>
      {/* Cada destaque vira uma etiqueta; a key ajuda o React a identificar o item. */}
      {destaques.length > 0 && (
        <ul className={Styles.destaques} aria-label={`Destaques de ${lugar}`}>
          {destaques.map((destaque) => <li key={destaque}>{destaque}</li>)}
        </ul>
      )}
    </section>
  )
}

export default ComponentProps
