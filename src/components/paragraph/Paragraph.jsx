import { paragraph__small, paragraph, paragraph__bold } from "./Paragraph.module.scss";
import cx from "classnames";
export const Paragraph = (props) => (
  <p className={cx(paragraph, paragraph__small)}>{props.paragraph}</p>
);
export const ParagraphBold = (props) => (
  <p className={cx(paragraph, paragraph__bold)}>{props.paragraph}</p>
);
