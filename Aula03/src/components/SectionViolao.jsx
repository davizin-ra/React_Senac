import CardV from "./CardV";
import Style from "./styles/SectionViolao.module.css";

const lista = [];
const tam = 4;

for (let i = 0; i < tam; i++) {
  lista.push(i);
}

export default function SectionViolao() {
  return (
    <section className={Style.section}>
      {lista.map((i) => (
        <CardV />
      ))}
    </section>
  );
}
