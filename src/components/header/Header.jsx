import { ButtonConvert } from "../buttons/Buttons";
import { HeadingXxl } from "../headings/Headings";
import { header, header__wrapper } from "./Header.module.scss";
const Header = (props) => (
  <div className={header__wrapper}>
    <header className={header}>
      <HeadingXxl message="Encomenda o seu lanche agora sem sair de casa" />
      <ButtonConvert message="encomendar" />
    </header>
  </div>
);
export default Header;
