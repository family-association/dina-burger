import { buttonConvert } from "./Buttons.module.scss";
export const ButtonConvert = (props) => (
  <button className={buttonConvert}>{props.message}</button>
);
