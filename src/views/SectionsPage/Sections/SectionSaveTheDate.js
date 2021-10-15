/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

// Plugins
import DateCountdown from 'react-date-countdown-timer';

// Styles
import saveTheDateStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/saveTheDateStyle.js";

import branchGraphic from "assets/img/branches.png";
import emailEvent from "assets/email/montanye-wedding-2022.ics";

const useStyles = makeStyles(saveTheDateStyle);

export default function SectionSaveTheDate({ ...rest }) {
  const classes = useStyles();

  return (
    <div className="cd-section" {...rest}>
      <div
        className={
          classes.saveTheDate + " " + classes.sectionDark + " " + classes.projects3
        }
      >
        <div className={classes.container}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <img
                  src={branchGraphic}
                  alt="Branch graphic."
                  className={classes.branchCustomGraphic}
                />
              </GridItem>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                <h2 className={classes.title}>
                  <i>October 15th, 2022</i>
                </h2>
                <a
                  className={classes.link}
                  href="https://www.google.com/maps/dir//321+N+10th+St,+St.+Louis,+MO+63101/@38.6298125,-90.1966413,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x87d8b318505f92d9:0xc70fcf24f124ecec!2m2!1d-90.1944526!2d38.6298125!3e0?hl=en"
                  target="_blank"
                  rel="noopener"
                  title="Directions to Willow Wedding Venue"
                  aria-label="Directions to Willow Wedding Venue">
                  Willow Wedding Venue
                  <br />
                  321 N 10th St, St. Louis, MO 63101
                </a>
                <h3 className={classes.title}>
                  <DateCountdown
                    dateTo='October 15, 2022 00:00:00 GMT-06:00'
                    mostSignificantFigure="day"
                    numberOfFigures={4}>
                  </DateCountdown>
                </h3>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(
                classes.socialLine,
                classes.textCenter,
                classes.dark,
                classes.bigIcons
              )}
            >
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={8} md={8}>
                    <h4 className={classes.title + " " + classes.customTitle}>Save the date to your calendar!</h4>
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={2} md={2} className={classes.borderRight}>
                    <Button
                      color="white"
                      justIcon
                      simple
                      href={emailEvent}
                      target="_blank"
                      rel="noopener"
                      aria-label="Save the date to your Outlook calendar"
                      download
                    >
                      <Tooltip
                        id="tooltip-bottom"
                        title="Save the date to your Outlook calendar"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <i className="fab fa-microsoft" />
                      </Tooltip>
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2}>
                    <Button
                      color="white"
                      justIcon
                      simple
                      href={emailEvent}
                      target="_blank"
                      rel="noopener"
                      aria-label="Save the date to your Apple calendar"
                      download
                    >
                      <Tooltip
                        id="tooltip-bottom"
                        title="Save the date to your Apple calendar"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <i className="fab fa-apple" />
                      </Tooltip>
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2}>
                    <Button
                      color="white"
                      justIcon
                      simple
                      href="https://calendar.google.com/calendar/r/eventedit?text=Montanye+Wedding+2022&dates=20221015T210000Z/20221015T280000Z&details=Join+us+at+the+wedding+venue!&location=321+N+10th+St+-+St+Louis,+MO+63101"
                      target="_blank"
                      rel="noopener"
                      aria-label="Save the date to your Google calendar"
                    >
                      <Tooltip
                        id="tooltip-bottom"
                        title="Save the date to your Google calendar"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <i className="fab fa-google" />
                      </Tooltip>
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2}>
                    <Button
                      color="white"
                      justIcon
                      simple
                      href={emailEvent}
                      target="_blank"
                      rel="noopener"
                      aria-label="Save the date to your Yahoo calendar"
                      download
                    >
                      <Tooltip
                        id="tooltip-bottom"
                        title="Save the date to your Yahoo calendar"
                        placement="bottom"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <i className="fab fa-yahoo" />
                      </Tooltip>
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
