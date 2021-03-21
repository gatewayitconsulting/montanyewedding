/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Theaters from "@material-ui/icons/Theaters";
import BeachAccess from "@material-ui/icons/BeachAccess";
import LocalBar from "@material-ui/icons/LocalBar";
import ChildCare from "@material-ui/icons/ChildCare";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";
import Tooltip from "@material-ui/core/Tooltip";

// Styles
import FAQsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/FAQsStyle.js";

import treeGraphic from "assets/img/johnlauren/tree.png";

const useStyles = makeStyles(FAQsStyle);

export default function SectionFAQs({ ...rest }) {
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
                        <h2 className={classes.title + " " + classes.customTitle}>
                            What to Expect
                        </h2>
                        <p className={classes.description} style={{fontSize: "17px"}}>
                            Here you can find information about the wedding event and day.
                        </p>
                        <div className={classes.sectionSpace} />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} md={8}>
                        <InfoArea
                            className={classes.info4}
                            title="What should I wear?"
                            description="The dress code for our wedding is formal attire."
                            icon={Theaters}
                            iconColor="dark"
                        />
                        <InfoArea
                            className={classes.info4}
                            title="Will the ceremony and reception be indoors or outdoors?"
                            description="Both the ceremony and the reception will be held inside at the Willow."
                            icon={BeachAccess}
                            iconColor="dark"
                        />
                        <InfoArea
                            className={classes.info4}
                            title="What happens after the ceremony?"
                            description="After the ceremony, the bridal party will be taking pictures nearby for about an hour while the guests enjoy a few drinks."
                            icon={LocalBar}
                            iconColor="dark"
                        />
                        <InfoArea
                            className={classes.info4}
                            title="May I bring my children?"
                            description="
                                Respectfully we have chosen to make our wedding day child free. While we love your little ones, 
                                our wedding is going to be an adults only event so that everyone can relax and enjoy the evening. 
                                We appreciate you making arrangements ahead of time and leaving the kids at home so that you can 
                                celebrate with us. 
                            "
                            icon={ChildCare}
                            iconColor="dark"
                        />
                        </GridItem>
                        <GridItem
                            xs={12}
                            md={4}
                            >
                            <img
                            src={treeGraphic}
                            alt="Branch graphic."
                            className={classes.treeCustomGraphic}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
