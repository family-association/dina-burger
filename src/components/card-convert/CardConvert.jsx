import { Paragraph, ParagraphBold } from "../paragraph/Paragraph";
import { card } from "./CardConvert.module.scss";
const CardConvert = (props) => (
  <div className={card}>
    <img src={props.image} alt={props.alt} />
    <ParagraphBold message={props.title} />
    <Paragraph message={props.message} />
  </div>
);
export default CardConvert;
