import {
  headingSecondary,
  headingPrimary,
  headingTertiary,
  headingXxl,
} from "./Headings.module.scss";
export const HeadingSecondary = (props) => (
  <h2 className={headingSecondary}>{props.heading}</h2>
);
export const HeadingPrimary = (props) => (
  <h1 className={headingPrimary}>{props.heading}</h1>
);
export const HeadingTertiary = (props) => (
  <h3 className={headingTertiary}>{props.heading}</h3>
);
export const HeadingXxl = (props) => (
  <h1 className={headingXxl}>{props.heading}</h1>
);
