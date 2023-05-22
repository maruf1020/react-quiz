import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="React Quiz app Logo" />
            <h3>React Quiz app</h3>
          </a>
        </li>
      </ul>
      <Account></Account>
    </nav>
  );
}
