import { HeadingTertiary } from "../headings/Headings";
import { Paragraph, ParagraphBold } from "../paragraph/Paragraph";
import { ButtonConvert } from "../buttons/Buttons";
import {
  sectionConvert,
  sectionConvert__wrapper,
  sectionConvert__left,
  sectionConvert__right,
  column,
} from "./SectionConvert.module.scss";
import CardConvert from "../card-convert/CardConvert";
import { useState } from "react";
import image1 from "./../../assets/images/how_1.svg";
import image2 from "./../../assets/images/how_2.svg";
import image3 from "./../../assets/images/how_3.svg";
const SectionConvert = () => {
  const [cards, setCards] = useState([
    {
      image: image1,
      title: "comprar é facil",
      message: "lorem ipsum bla solo permit ocoleira sodome tiroya para orcar",
    },
    {
      image: image2,
      title: "comprar é facil",
      message: "lorem ipsum bla solo permit ocoleira sodome tiroya para orcar",
    },
    {
      image: image3,
      title: "comprar é facil",
      message: "lorem ipsum bla solo permit ocoleira sodome tiroya para orcar",
    },
  ]);
  return (
    <div className={sectionConvert__wrapper}>
      <div className={sectionConvert}>
        <div className={sectionConvert__left}>
          <div className={column}>
            <CardConvert
              image={cards[0].image}
              title={cards[0].title}
              message={cards[0].message}
            />
            <CardConvert
              image={cards[1].image}
              title={cards[1].title}
              message={cards[1].message}
            />
          </div>
          <div className={column}>
            <CardConvert
              image={cards[2].image}
              title={cards[2].title}
              message={cards[2].message}
            />
          </div>
          {
            // console.log(cards)
            // cards
            //   ? cards.map((card) => (
            //       <CardConvert
            //         image={card.image}
            //         title={card.title}
            //         message={card.message}
            //       />
            //     ))
            //   : null
          }
        </div>
        <div className={sectionConvert__right}>
          <HeadingTertiary message="Compre e ganhe premios" />
          <Paragraph message="lorem ipsum dolor so do lara porti orosi catalog omasory malgari ortelia superioru pernosa comotiva palana tito catalog omasory malgari ortelia superioru pernosa comotiva palana tito" />
          <ParagraphBold message="é isso mesmo não perca!" />
          <ButtonConvert message="Quero ganhar!" />
        </div>
      </div>
    </div>
  );
};
export default SectionConvert;
