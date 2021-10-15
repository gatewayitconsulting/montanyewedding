import {
  container,
  mlAuto,
  mrAuto,
  title,
  link,
  cardTitle,
  description,
  coloredShadow,
  whiteColor,
  hexToRgb,
  borderRight,
  imageCenter,
} from "assets/jss/material-kit-pro-react.js";

const FAQsStyle = {
  container,
  mlAuto,
  mrAuto,
  title,
  link,
  description,
  coloredShadow,
  cardTitle,
  borderRight,
  imageCenter,
  textCenter: {
    textAlign: "center"
  },
  faqs: {
    padding: "40px 0"
  },
  tabSpace: {
    padding: "20px 0 50px 0px"
  },
  bigIcons: {
    "& a": {
      margin: 0,
      width: "100% !important",
      paddingTop: "45px",
      paddingBottom: "45px"
    },
    "& button i.fab, & a i.fab": {
      fontSize: "25px !important",
      lineHeight: "90px !important"
    }
  },
  cardCategory: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important",
    marginTop: "10px"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + "  !important",
    marginTop: "10px !important"
  },
  cardDescription: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important"
  },
  sectionSpace: {
    height: "70px",
    display: "block"
  },
  socialLine: {
    padding: ".9375rem 0px"
  },
  marginTop20: {
    marginTop: "20px"
  },
  card2: {
    textAlign: "center"
  },
  projects3: {
    "& h6": {
      marginBottom: "5px"
    }
  },
  card4: {
    marginTop: "0",
    marginBottom: "0",
    "& $cardTitle": {
      color: whiteColor
    }
  },
  cardBody4: {
    paddingTop: "140px",
    paddingBottom: "140px"
  },
  info4: {
    padding: "0"
  },
  projects4: {
    "& hr": {
      margin: "70px auto",
      maxWidth: "970px"
    }
  },
  customTitle: {
    fontSize: "3rem !important"
  },
  treeCustomGraphic: {
    width: "80%",
    marginLeft: "2em",
    marginTop: "2em",
    "@media (min-width: 768px)": {
      marginLeft: "5em",
      marginTop: "3em",
      width: "75%"
    },
    "@media (min-width: 960px)": {
      marginTop: "0",
      width: "100%"
    },
  }
};

export default FAQsStyle;
