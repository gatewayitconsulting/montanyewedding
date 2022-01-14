/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// plugins
import Carousel from "react-slick";

// images
import image1 from "assets/img/vendors/flowers1.jpeg";
import image2 from "assets/img/vendors/flowers2.jpeg";

// @material-ui/icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import VideocamIcon from '@material-ui/icons/Videocam';
import ExploreIcon from '@material-ui/icons/Explore';

// Styles
import vendorsStyle from "assets/jss/material-kit-pro-react/views/vendorsStyle.js";

const useStyles = makeStyles(vendorsStyle);

export default function SectionDJ({ ...rest }) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className="cd-section" {...rest}>
            <div
                className={
                    classes.faqs + " " + classes.sectionDark + " " + classes.projects3
                }
            >
                <div className={classes.container}>
                    <div className={classes.faqs + " " + classes.projects4}>
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem
                                    xs={12}
                                    className={
                                        classes.mlAuto + " " + classes.mrAuto
                                    }
                                >
                                    <h2 className={classes.title + " " + classes.customTitle}>
                                        DJ - Millennium Productions
                                    </h2>
                                    <h3 style={{ marginTop: "0", fontSize: "1.25rem" }}>St. Louis, MO</h3>
                                    <p>
                                        Copy
                                    </p>
                                </GridItem>
                            </GridContainer>
                            <GridContainer style={{ marginBottom: "1em" }}>
                                <GridItem>
                                    <h3>Socials</h3>
                                </GridItem>
                                <GridItem xs={12} sm={2}>
                                    <a href="https://www.facebook.com/millennium.productions/" target="_blank" rel="noopener" title="To Millennium Production's Facebook">
                                        <Button color="facebook" className={classes.facebookColor}>
                                            <FacebookIcon /> Connect
                                        </Button>
                                    </a>
                                </GridItem>
                                <GridItem xs={12} sm={2}>
                                    <a href="https://www.instagram.com/millenniumstl/" target="_blank" rel="noopener" title="To Millennium Production's Instagram">
                                        <Button className={classes.instagramColor}>
                                            <InstagramIcon /> Connect
                                        </Button>
                                    </a>
                                </GridItem>
                                <GridItem xs={12} sm={2}>
                                    <a href="https://vimeo.com/millenniumstl" target="_blank" rel="noopener" title="To Millennium Production's Vimeo">
                                        <Button className={classes.vimeoColor}>
                                            <VideocamIcon /> Connect
                                        </Button>
                                    </a>
                                </GridItem>
                                <GridItem xs={12} sm={2}>
                                    <a href="https://www.millenniumproductions.com/" target="_blank" rel="noopener">
                                        <Button className={classes.websiteColor} title="To Millennium Production's website">
                                            <ExploreIcon /> See website
                                        </Button>
                                    </a>
                                </GridItem>
                            </GridContainer>
                            {/* <GridContainer>
                                <GridItem xs={12}>
                                    <Carousel {...settings}>
                                        <div>
                                            <img src={image1} alt="First slide" className="slick-image" />
                                        </div>
                                        <div>
                                            <img
                                                src={image2}
                                                alt="Second slide"
                                                className="slick-image"
                                            />
                                        </div>
                                    </Carousel>
                                </GridItem>
                            </GridContainer> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
