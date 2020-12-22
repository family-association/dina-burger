import { HeadingTertiary } from "../headings/Headings";
import ProductSelect from "../product-select/ProductSelect";
import {
  cardOrder,
  cardOrder__header,
  cardOrder__body,
} from "./CardOrder.module.scss";

const CardOrder = () => (
  <div className={cardOrder}>
    <div className={cardOrder__header}>
      <HeadingTertiary message="oque vais querer?" />
    </div>
    <div className={cardOrder__body}>
      <ProductSelect />
      <ProductSelect />
      <ProductSelect />
      <ProductSelect />
    </div>
  </div>
);
export default CardOrder;
