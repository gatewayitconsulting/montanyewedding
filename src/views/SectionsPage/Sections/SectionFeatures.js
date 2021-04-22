import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import laurenJohn from "assets/img/lauren-john.jpg";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features4}>
          <GridContainer>
            <GridItem
              xs={12}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title + " " + classes.customTitle}>
                  How we Met
              </h2>
              <h5 className={classes.description}>
                Check out the timeline for history on how we met and some of
                the very important moments in our relationship.
              </h5>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="December 2017"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">The 1st Date</h3>
                  <h4 className="vertical-timeline-element-subtitle">St. Louis Art Museum</h4>
                  <p className="vertical-timeline-element-copy">
                    Timeline point copy
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={
                    classes.leftAligned + "vertical-timeline-element--work"
                  }
                  date="January 1st, 2018"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">John asks Lauren out</h3>
                  <h4 className="vertical-timeline-element-subtitle">Granite City</h4>
                  <p className="vertical-timeline-element-copy">
                    Timeline point copy
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="October 18th, 2019"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">John proposes</h3>
                  <h4 className="vertical-timeline-element-subtitle">Universal Studios, Orlando</h4>
                  <p className="vertical-timeline-element-copy">
                    Timeline point copy
                  </p>
                  <img
                    className="vertical-timeline-element-image"
                    src={laurenJohn}
                    alt=""
                  />
                </VerticalTimelineElement>
              </VerticalTimeline>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
