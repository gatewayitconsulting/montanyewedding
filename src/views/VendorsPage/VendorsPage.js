/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Parallax from "components/Parallax/Parallax.js";
import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Button from "components/CustomButtons/Button.js";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

import SectionFlorist from "./Sections/SectionFlorist.js";
import SectionPhotographer from "./Sections/SectionPhotographer.js";
import SectionMakeup from "./Sections/SectionMakeup.js";
import SectionDJ from "./Sections/SectionDJ.js";

// Makeup artist Set by Dren

import backgroundImage from "../../assets/img/vendors.jpeg";

// import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);


export default function VendorsPage() {
    React.useEffect(() => {
        window.addEventListener('load', (event) => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
        });
    });
    const classes = useStyles();
    return (
        <div>
            <Header
                brand="Montanye Wedding"
                links={<HeaderLinks dropdownHoverColor="dark" />}
                fixed
                color="dark"
            />
            <Parallax image={backgroundImage} filter="dark">
                <div className={classes.container}>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.contactContent}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12}>
                                <h2 className={classes.title + " " + classes.customTitle}>
                                    Vendors
                                </h2>
                            </GridItem>
                            <GridItem xs={12} md={9} style={{ marginLeft: "auto", marginRight: "auto" }}>
                                <p style={{ textAlign: "center" }}>
                                    Without these wonderful teams of people, we would have never been able to plan for or celebrate our big day. Please go show them some love if you enjoyed their work!
                                </p>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12}>
                                <SectionFlorist style={{ marginBottom: "4rem" }} />
                                <hr />
                                <SectionPhotographer style={{ marginBottom: "4rem" }} />
                                <hr />
                                <SectionMakeup style={{ marginBottom: "4rem" }} />
                                <hr />
                                <SectionDJ />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer
                theme="dark"
                content={
                    <div>
                        <div className="footer-brand">
                            Copyright &copy; {1900 + new Date().getYear()}{" "}
                            <a
                                href="https://gatewayitconsulting.com"
                                target="_blank"
                                className={classes.aClasses}
                            >
                                Gateway IT Consulting
                            </a>{" "}
                            All Rights Reserved.
                        </div>
                        <div className="footer-privacy-policy">
                            <Link to="/privacy-policy" title="To privacy policy page">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                }
            >
                <GridContainer>
                    <GridItem xs={12} md={6}>
                        <h5>About Us</h5>
                        <p>
                            This website has been created by Lauren and John. Lauren used her
                            design eye and John used his skills in web development to create
                            this website.{" "}
                        </p>
                        <p>
                            <b>Technology used:</b> Creative Tim Material Design theme customized
                            using React, HTML5, SASS, and some 3rd parties to handle the
                            heavy lifting in the backend.{" "}
                        </p>
                    </GridItem>
                </GridContainer>
            </Footer>
        </div>
    );
}
