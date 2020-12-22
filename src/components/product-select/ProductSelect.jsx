import Select from "react-select";
import { Paragraph, ParagraphBold } from "../paragraph/Paragraph";
import {
  product,
  product__price,
  product__infos,
  product__select,
} from "./ProductSelect.module.scss";
const options = [
  { value: "value 1", label: "label 1" },
  { value: "value 2", label: "label 2" },
  { value: "value 3", label: "label 3" },
];
const ProductSelect = () => (
  <div className={product}>
    <Paragraph message="Fast-food" />
    <div className={product__infos}>
      <div className={product__select}>
        <Select options={options} />
      </div>
      <span className={product__price}>500mts</span>
      <ParagraphBold message="Qtd:" />
    </div>
  </div>
);

export default ProductSelect;
