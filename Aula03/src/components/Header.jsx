import Style from './styles/Header.module.css'

export default function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.navbar}>
        <a href="">Home</a>
        <a href="">Quem somos</a>
        <a href="">Instrumentos</a>
        <a href="">Endereço</a>
        <a href="">Contato</a>
      </div>
    </header>
  );
}
