import {
  headingSecondary,
  headingPrimary,
  headingTertiary,
  headingXxl,
} from "./Headings.module.scss";
export const HeadingSecondary = (props) => (
  <h2 className={headingSecondary}>{props.message}</h2>
);
export const HeadingPrimary = (props) => (
  <h1 className={headingPrimary}>{props.message}</h1>
);
export const HeadingTertiary = (props) => (
  <h3 className={headingTertiary}>{props.message}</h3>
);
export const HeadingXxl = (props) => (
  <h1 className={headingXxl}>{props.message}</h1>
);
