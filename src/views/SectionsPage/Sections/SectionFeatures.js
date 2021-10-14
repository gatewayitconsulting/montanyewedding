import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import laurenJohn from "assets/img/timeline/lauren-john.jpg";
import artMuseum from "assets/img/timeline/art-musuem.jpg";
import proposal from "assets/img/timeline/proposal.jpg";
import house from "assets/img/timeline/house.jpg";
import johnAsksLaurenOut from "assets/img/timeline/johnAsksLaurenOut.jpg";
import engagement from "assets/img/timeline/engagement1.jpg";

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
                  date="December 9th, 2017"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">First Date</h3>
                  <h4 className="vertical-timeline-element-subtitle">St. Louis Art Museum</h4>
                  <img
                    className="vertical-timeline-element-image"
                    src={artMuseum}
                    alt=""
                  />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={
                    classes.leftAligned + "vertical-timeline-element--work"
                  }
                  date="January 1st, 2018"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">Beginning of Relationship</h3>
                  <h4 className="vertical-timeline-element-subtitle">Granite City</h4>
                  <img
                    className="vertical-timeline-element-image"
                    src={johnAsksLaurenOut}
                    alt=""
                  />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={
                    // eslint-disable-next-line
                    classes.rightAligned + "vertical-timeline-element--work" + "vertical-3"
                  }
                  date="October 18th, 2019"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">John Proposes</h3>
                  <h4 className="vertical-timeline-element-subtitle">Universal Studios, Orlando</h4>
                  <img
                    className="vertical-timeline-element-image"
                    src={proposal}
                    alt=""
                  />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="June 19th, 2020"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">First House</h3>
                  <h4 className="vertical-timeline-element-subtitle">Edwardsville, Illinois</h4>
                  <img
                    className="vertical-timeline-element-image"
                    src={house}
                    alt=""
                  />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={
                    // eslint-disable-next-line
                    "vertical-timeline-element--work" + "vertical-5"
                  }
                  date="September 12th, 2021"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">Engagement Photoshoot</h3>
                  <h4 className="vertical-timeline-element-subtitle">Blueprint Coffee &amp; Forest Park, St. Louis</h4>
                  <img
                    className="vertical-timeline-element-image"
                    src={engagement}
                    alt=""
                  />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="October 15th, 2022"
                  iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                  icon={<Favorite />}
                >
                  <h3 className="vertical-timeline-element-title">Coming Soon, Wedding Day</h3>
                  <h4 className="vertical-timeline-element-subtitle">Willow, St. Louis</h4>
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
