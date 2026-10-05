import Style from "./styles/CardV.module.css";
import ImgViolao from "../../public/imagens/guitarrinha.jpg";

export default function CardV() {
  return (
    <div className={Style.div}>
        <img className={Style.img} src={ImgViolao} alt="" />
        <h1>Violão Yamaha C70 Clássico Nylon Acústico Natural Brilhante</h1>
        <h2>R$: 989,50</h2>
    </div>
  );
}
