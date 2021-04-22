import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// sections of this Page
import SectionFAQs from "./Sections/SectionFAQs.js";
import SectionFooter from "./Sections/SectionFooter.js";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="dark"
        brand="Montanye Wedding"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
      />
      <div className={classes.main}>
        <SectionFAQs id="faqs" />
        <SectionFooter id="footer" />
      </div>
    </div>
  );
}
