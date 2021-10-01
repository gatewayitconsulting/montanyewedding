import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
import SectionFeatures from "./Sections/SectionFeatures.js";
import SectionSaveTheDate from "./Sections/SectionSaveTheDate.js";
import SectionWeddingParty from "./Sections/SectionWeddingParty.js";
import SectionFooter from "./Sections/SectionFooter.js";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

import ScrollToTop from "react-scroll-to-top";
// import { Link } from "react-router-dom";

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
        <ScrollToTop smooth />
        <SectionHeaders id="toTop" />
        <SectionSaveTheDate id="saveTheDate" />
        <SectionWeddingParty id="weddingParty" />
        <SectionFeatures id="timeline" />
        <SectionFooter id="footer" />
      </div>
    </div>
  );
}
