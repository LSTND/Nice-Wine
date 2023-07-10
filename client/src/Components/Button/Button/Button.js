import { ReactPropTypes } from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button
      className={"button " + this.props.btnStyles}
      type="button"
      onClick={this.props.btnClick}
    >
      {this.props.text}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  btnClick: () => {},
  btnStyles: "btn__bad",
};

Button.propTypes = {
  btnStyles: PropTypes.string,
  type: PropTypes.string,
  btnClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;