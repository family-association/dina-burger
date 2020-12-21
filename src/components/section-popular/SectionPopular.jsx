import { HeadingSecondary } from "../headings/Headings";
import { Paragraph } from "./../paragraph/Paragraph";
import Carroussel from "./../carroussel/Carroussel";
import {
  sectionPopular,
  sectionPopular__wrapper,
} from "./SectionPopular.module.scss";

const SectionPopular = (props) => (
  <div className={sectionPopular__wrapper}>
    <section className={sectionPopular}>
      <HeadingSecondary heading="Lanches Populares" />
      <Paragraph paragraph="os nossos lanches mais populares" />
      <Carroussel />
    </section>
  </div>
);

export default SectionPopular;
