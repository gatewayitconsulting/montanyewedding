import { blackColor } from "assets/jss/material-kit-pro-react";
import {
  mrAuto,
  mlAuto,
  cardTitle,
  whiteColor,
  infoColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";

const pricingStyle = {
  mrAuto,
  mlAuto,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: blackColor + " !important",
    "& small": {
      color: "rgba(" + hexToRgb(blackColor) + ",0.8)!important"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  pricingSection: {
    padding: "80px 0px"
  },
  textInfo: {
    color: infoColor[0] + " !important"
  }
};

export default pricingStyle;
