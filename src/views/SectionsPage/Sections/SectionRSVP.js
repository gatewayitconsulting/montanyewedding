/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function SectionRSVP() {
  const classes = useStyles();
  return (
    <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineWhite,
          classes.rsvp
        )}
      >
        <div className={classes.container}>
            <div className={classes.container}>
            <GridContainer>
                <GridItem 
                    xs={12} 
                    sm={4} 
                    md={4}
                    className={
                        classes.mlAuto + " " + classes.mrAuto
                    }>
                <h3 className={classes.title}>RSVP &amp; stay up to date!</h3>
                <p className={classes.description}>
                    Stay up to date with information
                    involving the wedding. Anything from RSVPs to event reminders.
                </p>
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                <Card plain>
                    <CardBody>
                    <form>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={6} lg={8}>
                            <CustomInput
                            id="emailPreFooter2"
                            formControlProps={{
                                fullWidth: true,
                                className: classes.formFix
                            }}
                            inputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <Mail />
                                </InputAdornment>
                                ),
                                placeholder: "Your Email..."
                            }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6} lg={4}>
                            <Button
                            color="rose"
                            round
                            block
                            className={classes.subscribeButton}
                            >
                            subscribe
                            </Button>
                        </GridItem>
                        </GridContainer>
                    </form>
                    </CardBody>
                </Card>
                </GridItem>
            </GridContainer>
            </div>
        </div>
    </div>
  );
}