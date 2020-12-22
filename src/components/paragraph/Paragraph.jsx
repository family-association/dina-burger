import {
  paragraph__small,
  paragraph,
  paragraph__bold,
  paragraph__tiny,
} from "./Paragraph.module.scss";
import cx from "classnames";
export const Paragraph = (props) => (
  <p className={paragraph}>{props.message}</p>
);
export const ParagraphSmall = (props) => (
  <p className={cx(paragraph, paragraph__small)}>{props.message}</p>
);
export const ParagraphBold = (props) => (
  <p className={cx(paragraph, paragraph__bold)}>{props.message}</p>
);
export const ParagraphTiny = (props) => (
  <p className={cx(paragraph, paragraph__tiny)}>{props.message}</p>
);
