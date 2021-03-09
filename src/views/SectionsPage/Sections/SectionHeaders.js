import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import fallImage from "assets/img/johnlauren/fall-image.jpg";
import proposalImage from "assets/img/johnlauren/proposal.JPG";
import engagementImage from "assets/img/johnlauren/engagement2.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      {/* HEADER 3 START */}
      <div>
        <Carousel {...settings} style={{backgroundColor: "black"}}>
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${fallImage}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <img
                      src={require(`assets/img/johnlauren/top.png`)}
                      className={classes.branchGraphic}
                    />
                    <h3 className={classes.subText}>
                      We invite you to
                    </h3>
                    <h1 className={classes.title + " " + classes.customTitle}>Save the Date</h1>
                    <img
                      src={require(`assets/img/johnlauren/bottom.png`)}
                      className={classes.branchGraphic}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${engagementImage}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <img
                      src={require(`assets/img/johnlauren/top.png`)}
                      className={classes.branchGraphic}
                    />
                    <h3 className={classes.subText}>
                      The wedding celebration of
                    </h3>
                    <h1 className={classes.title + " " + classes.customTitle}>John &amp; Lauren</h1>
                    <img
                      src={require(`assets/img/johnlauren/bottom.png`)}
                      className={classes.branchGraphic}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${proposalImage}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <img
                      src={require(`assets/img/johnlauren/top.png`)}
                      className={classes.branchGraphic}
                    />
                    <h3 className={classes.subText}>
                      Keep an eye out!
                    </h3>
                    <h1 className={classes.title + " " + classes.customTitle}>Formal Invitation to Follow</h1>
                    <img
                      src={require(`assets/img/johnlauren/bottom.png`)}
                      className={classes.branchGraphic}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
        </Carousel>
      </div>
      {/* HEADER 3 END */}
    </div>
  );
}
