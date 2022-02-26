/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// images
const video = "https://www.millenniumproductions.com/wp-content/uploads/2017/04/DJ-BANNER-DJ-PAGE-HUBER-web.mp4";

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
                                        Millennium Productions is the premier St. Louis wedding DJ, videography, lighting, drape and decor company in the STL metro area. Our award winning services are recognized in the industry as innovative, creative and professional. We specialize in making your celebration one of a kind and one to remember! At Millennium, we strive to make the planning process simple and easy. We aim to keep things FUN while taking great care of you along the way!
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
                            <GridContainer>
                                <GridItem xs={12}>
                                    <div style={{
                                        overflow: 'hidden',
                                        paddingBottom: '56.25%',
                                        position: 'relative',
                                        height: 0
                                    }}>
                                        <iframe
                                            width="853"
                                            height="480"
                                            src={`${video}`}
                                            frameBorder="0"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Millennium Productions highlight embedded video"
                                            style={{
                                                left: 0,
                                                top: 0,
                                                height: '100%',
                                                width: '100%',
                                                position: 'absolute'
                                            }}
                                        />
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
