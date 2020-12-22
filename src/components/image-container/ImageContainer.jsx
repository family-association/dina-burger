import { HeadingTertiary } from "../headings/Headings";
import { Paragraph, ParagraphBold } from "../paragraph/Paragraph";
import { container, image, title } from "./ImageContainer.module.scss";
const ImageContainer = (props) => (
  <div className={container}>
    <img className={image} src={props.image} alt={props.alt} />
    <div className={title}>
      <ParagraphBold message={props.title} />
      <Paragraph message={props.price} />
    </div>
  </div>
);
export default ImageContainer;
