/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";

// plugins
// import Carousel from "react-slick";

// images
// import image1 from "assets/img/vendors/flowers1.jpeg";
// import image2 from "assets/img/vendors/flowers2.jpeg";

// @material-ui/icons
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import PinterestIcon from '@material-ui/icons/Pinterest';
// import ExploreIcon from '@material-ui/icons/Explore';

// Styles
import vendorsStyle from "assets/jss/material-kit-pro-react/views/vendorsStyle.js";

const useStyles = makeStyles(vendorsStyle);

export default function SectionDJ({ ...rest }) {
    const classes = useStyles();
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     autoplaySpeed: 5000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true
    // };
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
                                        DJ - TBD
                                    </h2>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
