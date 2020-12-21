import { paragraph, paragraph__bold } from "./Paragraph.module.scss";
export const Paragraph = (props) => (
  <p className={paragraph}>{props.paragraph}</p>
);
export const ParagraphBold = (props) => (
  <p className={paragraph__bold}>{props.paragraph}</p>
);
