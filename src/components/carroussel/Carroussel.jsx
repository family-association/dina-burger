import ImageContainer from "../image-container/ImageContainer";
import image1 from "./../../assets/images/carroussel1.jpg";
import image2 from "./../../assets/images/carroussel2.jpg";
import image3 from "./../../assets/images/carroussel3.jpg";
import image4 from "./../../assets/images/carroussel4.jpg";
import { carroussel } from "./Carroussel.module.scss";
const Carroussel = (props) => (
  <div className={carroussel}>
    <ImageContainer
      image={image1}
      title="pizza a la italiana"
      price="apenas 500mts"
    />
    <ImageContainer image={image2} title="hamburguer" price="apenas 110mts" />
    <ImageContainer
      image={image3}
      title="Batatas fritas"
      price="apenas 75mts"
    />
    <ImageContainer image={image4} title="Salada" price="apenas 80mts" />
  </div>
);

export default Carroussel;
