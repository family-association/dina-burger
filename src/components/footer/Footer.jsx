import Schedule from "../Schedule/Schedule";
import {
  footer,
  footer__wrapper,
  foot,
  foot__title,
  foot__link,
} from "./Footer.module.scss";
import {
  Paragraph,
  ParagraphBold,
  ParagraphTiny,
} from "../paragraph/Paragraph";
import { HeadingTertiary } from "../headings/Headings";
import LogoTitle from "../logo-title/LogoTitle";
const Footer = (props) => (
  <div className={footer__wrapper}>
    <div className={footer}>
      <div className={foot}>
        <div className={foot__title}>
          <LogoTitle />
          <ParagraphTiny message="© Dina burguer todos os direitos reservados" />
        </div>
        <Paragraph message="Av herois de libertacao nacional nr 69" />
        <ParagraphBold message="Contacto: +258 846944567/867843523" />
        <Paragraph message="Email: vendas@dinaburguer.com" />
      </div>
      <div className={foot}>
        <div className={foot__title}>
          <HeadingTertiary message="Nossos Horarios" />
        </div>
        <Schedule day="segunda" time="08:00h-20:30h" />
        <Schedule day="terca" time="08:00h-20:30h" />
        <Schedule day="quarta" time="08:00h-20:30h" />
        <Schedule day="quinta" time="08:00h-20:30h" />
        <Schedule day="sexta" time="08:00h-20:30h" />
        <Schedule day="sabádo" time="08:00h-20:30h" />
        <Schedule day="domingo" time="Fechado" />
      </div>
      <div className={foot}>
        <div className={foot__title}>
          <HeadingTertiary message="Links rapidos" />
        </div>
        <a className={foot__link} href="#">
          Home
        </a>
        <a className={foot__link} href="#">
          Sobre Nós
        </a>
        <a className={foot__link} href="#">
          Fazer Um pedido
        </a>
        <a className={foot__link} href="#">
          Nosso facebook
        </a>
        <a className={foot__link} href="#">
          Nosso twitter
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
