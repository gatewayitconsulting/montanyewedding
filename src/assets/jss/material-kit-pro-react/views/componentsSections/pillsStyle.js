import { 
  container,
  title 
} from "assets/jss/material-kit-pro-react.js";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  customTitle: {
    fontSize: "3rem !important",
    textAlign: "center"
  },
  imageTitle: {
    textAlign: "center"
  },
  ...imagesStyles
};

export default pillsStyle;
