/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Styles
import whenAndWhereStyle from "assets/jss/material-kit-pro-react/views/whenAndWhereStyle.js";

const useStyles = makeStyles(whenAndWhereStyle);

export default function SectionParking({ ...rest }) {
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
                                        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                                    }
                                >
                                    <h2 className={classes.title + " " + classes.customTitle} style={{ textAlign: "center" }}>
                                        Parking
                                    </h2>
                                    <p>
                                        We are currently working on some better parking options. Please check these spots out to get better acquainted with the parking near our event.
                                    </p>
                                    <div className={classes.sectionSpace} />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12}>
                                    <p>Hotels</p>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
