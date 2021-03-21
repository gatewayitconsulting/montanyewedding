import {
  container,
  main,
  mrAuto,
  mlAuto
} from "assets/jss/material-kit-pro-react.js";

const pricingStyle = {
  main,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1
  },
  textCenter: {
    textAlign: "center"
  }
};

export default pricingStyle;
