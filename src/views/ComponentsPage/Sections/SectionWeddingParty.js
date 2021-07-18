import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(pillsStyle);

export default function SectionWeddingParty() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Navigation Pills</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={8} md={6} lg={6}>
              <h3>
                <small>Horizontal tabs</small>
              </h3>
              <NavPills
                color="rose"
                tabs={[
                  {
                    tabButton: "Profile",
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.{" "}
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Settings",
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.{" "}
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Options",
                    tabContent: (
                      <span>
                        <p>
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.{" "}
                        </p>
                        <br />
                        <p>
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </p>
                      </span>
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
