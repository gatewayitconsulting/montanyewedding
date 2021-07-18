import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.js";

import image from "assets/img/faces/avatar.jpg";

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
                alignCenter="true"
                tabs={[
                  {
                    tabButton: "Groomsmen",
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRounded + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Rounded Image</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRounded + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Rounded Image</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRounded + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Rounded Image</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRounded + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Rounded Image</h4>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Bridesmaids",
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Circle Image</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Circle Image</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Circle Image</h4>
                        </GridItem>
                        <GridItem xs={12} sm={3}>
                          <img
                            src={image}
                            alt="..."
                            className={classes.imgRoundedCircle + " " + classes.imgFluid}
                          />
                          <h4 className={classes.imageTitle}>Circle Image</h4>
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
