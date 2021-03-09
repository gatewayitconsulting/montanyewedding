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
import SectionBlogs from "./Sections/SectionBlogs.js";
import SectionTeams from "./Sections/SectionTeams.js";
import SectionSaveTheDate from "./Sections/SectionSaveTheDate.js";
import SectionFAQs from "./Sections/SectionFAQs.js";
import SectionRSVP from "./Sections/SectionRSVP.js";
import SectionFooter from "./Sections/SectionFooter.js";
import SectionPricing from "./Sections/SectionPricing.js";
import SectionTestimonials from "./Sections/SectionTestimonials.js";
import SectionContacts from "./Sections/SectionContacts.js";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  // React.useEffect(() => {
  //   var href = window.location.href.substring(
  //     window.location.href.lastIndexOf("#") + 1
  //   );
  //   if (window.location.href.lastIndexOf("#") > 0) {
  //     document.getElementById(href).scrollIntoView();
  //   }
  //   window.addEventListener("scroll", updateView);
  //   updateView();
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateView);
  //   };
  // });
  // const updateView = () => {
  //   var contentSections = document.getElementsByClassName("cd-section");
  //   var navigationItems = document
  //     .getElementById("cd-vertical-nav")
  //     .getElementsByTagName("a");

  //   for (let i = 0; i < contentSections.length; i++) {
  //     var activeSection =
  //       parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
  //     if (
  //       contentSections[i].offsetTop - window.innerHeight / 2 <
  //         window.pageYOffset &&
  //       contentSections[i].offsetTop +
  //         contentSections[i].scrollHeight -
  //         window.innerHeight / 2 >
  //         window.pageYOffset
  //     ) {
  //       navigationItems[activeSection].classList.add("is-selected");
  //     } else {
  //       navigationItems[activeSection].classList.remove("is-selected");
  //     }
  //   }
  // };
  // const easeInOutQuad = (t, b, c, d) => {
  //   t /= d / 2;
  //   if (t < 1) return (c / 2) * t * t + b;
  //   t--;
  //   return (-c / 2) * (t * (t - 2) - 1) + b;
  // };
  // const smoothScroll = target => {
  //   var targetScroll = document.getElementById(target);
  //   scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  // };
  // const scrollGo = (element, to, duration) => {
  //   var start = element.scrollTop,
  //     change = to - start,
  //     currentTime = 0,
  //     increment = 20;

  //   var animateScroll = function() {
  //     currentTime += increment;
  //     var val = easeInOutQuad(currentTime, start, change, duration);
  //     element.scrollTop = val;
  //     if (currentTime < duration) {
  //       setTimeout(animateScroll, increment);
  //     }
  //   };
  //   animateScroll();
  // };
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
        <SectionHeaders id="toTop" />
        <SectionSaveTheDate id="saveTheDate" />
        <SectionFAQs id="faqs" />
        {/* <SectionRSVP id="rsvp" /> */}
        <SectionFooter id="footer" />
      </div>
    </div>
  );
}
