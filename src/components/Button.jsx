import classes from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ children, ...rest }) {
  return (
    <div className={classes.button} {...rest}>
      <span>{children}</span>
    </div>
  );
}
