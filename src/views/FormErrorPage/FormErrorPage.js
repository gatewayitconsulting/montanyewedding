/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// core components
import Parallax from "components/Parallax/Parallax.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

// images
import backgroundImage from "../../assets/img/rsvp.jpeg";

// styles
import formSuccessStyle from "assets/jss/material-kit-pro-react/views/formSuccessStyle.js";

const useStyles = makeStyles(formSuccessStyle);

export default function FormErrorPage() {
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
            <Parallax image={backgroundImage} filter="dark" style={{ height: "55vh", maxHeight: "550px" }}>
                <div className={classes.container}>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)} style={{ marginBottom: '2em' }}>
                <div className={classes.contactContent}>
                    <div className={classes.container}>
                        <h2 className={classes.title + " " + classes.customTitle}>
                            RSVP Error
                        </h2>
                        <GridContainer>
                            <GridItem
                                xs={12}
                                className={
                                    classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                                }
                                style={{ marginBottom: '2em' }}
                            >
                                <h3 className="vertical-timeline-element-title">Oh no!</h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    We are so sorry! Something has gone wrong on our end. <br /> Please try again <Link to="/rsvp">here</Link> or <a href="mailto:gatewayitconsulting@outlook.com">contact us</a> that something is wrong and we will get it resolved. <br /> Thank you for your patience!
                                </h4>
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
