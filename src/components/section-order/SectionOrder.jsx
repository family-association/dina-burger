import CardOrder from "../card-order/CardOrder";
import { sectionOrder, sectionOrderWrapper } from "./SectionOrder.module.scss";
const SectionOrder = (props) => (
  <div className={sectionOrderWrapper}>
    <div className={sectionOrder}>
      <CardOrder />
    </div>
  </div>
);
export default SectionOrder;
