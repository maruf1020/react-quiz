import PropTypes from "prop-types";
import classes from "../styles/Form.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}

Form.defaultProps = {
  className: "",
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
