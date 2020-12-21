import { HeadingXxl } from "../headings/Headings";
import { header, header__wrapper, button } from "./Header.module.scss";
const Header = (props) => (
  <div className={header__wrapper}>
    <header className={header}>
      <HeadingXxl heading="Encomenda o seu lanche agora sem sair de casa" />
      <button className={button}>encomendar</button>
    </header>
  </div>
);
export default Header;
