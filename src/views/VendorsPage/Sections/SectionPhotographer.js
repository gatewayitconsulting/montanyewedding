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
import ExploreIcon from '@material-ui/icons/Explore';

// Styles
import vendorsStyle from "assets/jss/material-kit-pro-react/views/vendorsStyle.js";

const useStyles = makeStyles(vendorsStyle);

export default function SectionFlorist({ ...rest }) {
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
                                        Photographer - Tawny Ballard
                                    </h2>
                                    <h3 style={{ marginTop: "0", fontSize: "1.25rem" }}>St. Louis, MO</h3>
                                    <p>
                                        About Copy
                                    </p>
                                </GridItem>
                            </GridContainer>
                            <GridContainer style={{ marginBottom: "1em" }}>
                                <GridItem>
                                    <h3>Socials</h3>
                                </GridItem>
                                <GridItem xs={12} sm={2}>
                                    <a href="https://www.facebook.com/tawnyballardphotography/" target="_blank" rel="noopener" title="To Tawny Ballard's Facebook">
                                        <Button color="facebook" className={classes.facebookColor}>
                                            <FacebookIcon /> Connect
                                        </Button>
                                    </a>
                                </GridItem>
                                <GridItem xs={12} sm={2}>
                                    <a href="https://www.instagram.com/tawnyballardphotography/" target="_blank" rel="noopener" title="To Tawny Ballard's Instagram">
                                        <Button className={classes.instagramColor}>
                                            <InstagramIcon /> Connect
                                        </Button>
                                    </a>
                                </GridItem>
                                <GridItem xs={12} sm={2}>
                                    <a href="https://tawnyballardphotography.com/" target="_blank" rel="noopener">
                                        <Button className={classes.websiteColor} title="To Tawny Ballard's website">
                                            <ExploreIcon /> See website
                                        </Button>
                                    </a>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12}>
                                    <Carousel {...settings}>
                                        <div>
                                            <img src={image1} alt="First slide" className="slick-image" />
                                            <div className="slick-caption">
                                                <h4>
                                                    Yellowstone National Park, United States
                                                </h4>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src={image2}
                                                alt="Second slide"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <h4>
                                                    Somewhere Beyond, United States
                                                </h4>
                                            </div>
                                        </div>
                                    </Carousel>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
