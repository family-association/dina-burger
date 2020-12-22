import { title, title__reverse } from "./LogoTitle.module.scss";
const LogoTitle = () => (
  <h1 className={title}>
    Dina's <span className={title__reverse}>Burguer</span>
  </h1>
);

export default LogoTitle;
