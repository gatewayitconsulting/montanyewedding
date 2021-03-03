/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Theaters from "@material-ui/icons/Theaters";
import Face from "@material-ui/icons/Face";
import Commute from "@material-ui/icons/Commute";
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

import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";

const useStyles = makeStyles(FAQsStyle);

export default function SectionFAQs({ ...rest }) {
  const classes = useStyles();

  return (
    <div className="cd-section" {...rest}>
      <div
        className={
          classes.saveTheDate + " " + classes.sectionDark + " " + classes.projects3
        }
      >
        <div className={classes.container}>
            <div className={classes.saveTheDate + " " + classes.projects4}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem
                        xs={12}
                        className={
                            classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                        }
                        >
                        <h2 className={classes.title}>
                            FAQs
                        </h2>
                        <h5 className={classes.description}>
                            Here you can find information about the wedding event and day.
                        </h5>
                        <div className={classes.sectionSpace} />
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={10} md={10}>
                        <InfoArea
                            className={classes.info4}
                            title="What to wear"
                            description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
                            icon={Theaters}
                            iconColor="info"
                        />
                        <InfoArea
                            className={classes.info4}
                            title="Sorry, no children"
                            description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                            icon={Face}
                            iconColor="primary"
                        />
                        <InfoArea
                            className={classes.info4}
                            title="Parking"
                            description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                            icon={Commute}
                            iconColor="danger"
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
