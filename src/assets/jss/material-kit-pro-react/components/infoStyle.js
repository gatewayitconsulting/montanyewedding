import { blackColor } from "assets/jss/material-kit-pro-react";
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/material-kit-pro-react.js";

const infoStyle = {
  infoArea: {
    padding: "70px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor[0]
  },
  warning: {
    color: warningColor[0]
  },
  danger: {
    color: dangerColor[0]
  },
  success: {
    color: successColor[0]
  },
  info: {
    color: infoColor[0]
  },
  rose: {
    color: roseColor[0]
  },
  gray: {
    color: grayColor[0]
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  descriptionWrapper: {
    color: grayColor[0],
    overflow: "hidden"
  },
  title: {
    ...title,
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    fontSize: "1.5em",
    fontWeight: "500",
    fontFamily: `"Charm", cursive`,
    lineHeight: "1.25em"
  },
  description: {
    color: blackColor,
    overflow: "hidden",
    marginTop: "0px",
    "& p": {
      color: blackColor,
      fontSize: "14px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default infoStyle;
