import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.js";

// images
import bobbyImage from "assets/img/faces/bobby.jpg";
import seanImage from "assets/img/faces/sean.jpg";
import amandaImage from "assets/img/faces/amanda.jpg";
import saraImage from "assets/img/faces/sara.jpg";
import stevenImage from "assets/img/faces/avatar.jpg";
import cameronImage from "assets/img/faces/cameron.jpg";
import benImage from "assets/img/faces/ben.jpg";
import michaelImage from "assets/img/faces/michael.jpg";

const useStyles = makeStyles(pillsStyle);

export default function SectionWeddingParty() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem
              xs={12}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title + " " + classes.customTitle}>
                The Wedding Party
              </h2>
              <NavPills
                color="dark"
                tabs={[
                  {
                    tabButton: "Bridesmaids",
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={bobbyImage}
                            alt="Bobby Gregonis"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Bobby Gregonis</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={amandaImage}
                            alt="Amanda Lucas"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Amanda Lucas</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={seanImage}
                            alt="Sean Fuller"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Sean Fuller</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={saraImage}
                            alt="Sara Hopkins"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Sara Hopkins</h4>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Groomsmen",
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={stevenImage}
                            alt="Steven Chaffin"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Steven Chaffin</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={cameronImage}
                            alt="Cameron Cruz"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Cameron Cruz</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={benImage}
                            alt="Ben Suntrup"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Ben Suntrup</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={michaelImage}
                            alt="Michael Schisla"
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Michael Schisla</h4>
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
