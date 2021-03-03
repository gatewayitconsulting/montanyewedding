import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import storeImage from "assets/img/johnlauren/store.JPG";
import proposalImage from "assets/img/johnlauren/proposal.JPG";
import ringImage from "assets/img/johnlauren/ring.JPG";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      {/* HEADER 3 START */}
      <div>
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${proposalImage}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Wedding Coming 2022</h1>
                    <h4>
                      We can't wait to share this wonderful day with friends and family.
                    </h4>
                    <br />
                    <h6>Connect with us on:</h6>
                    <div>
                      <Button color="white" simple size="lg" justIcon>
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${storeImage}")` }}
            >
              <div className={classes.container}>
                {/* <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h1 className={classes.title}>Montanye Wedding</h1>
                    <h4>
                      Dolce & Gabbana is a luxury Italian fashion house founded
                      in 1985 in Legnano by Italian designers Domenico Dolce and
                      Stefano Gabbana. The two met in Milan in 1980 and designed
                      for the same fashion house.
                    </h4>
                    <br />
                    <Button color="danger" size="lg">
                      Read more
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon color="white" simple>
                      <i className="fab fa-get-pocket" />
                    </Button>
                  </GridItem>
                </GridContainer> */}
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${ringImage}")` }}
            >
              <div className={classes.container}>
                {/* <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>New Collection 50% Off</h1>
                    <h4>
                      There{"'"}s no doubt that Tesla is delighted with the
                      interest, but the data also raises a few questions. How
                      long will it take for Tesla to fulfill all those extra
                      orders?
                    </h4>
                    <br />
                    <div>
                      <Button color="white" simple size="lg">
                        <Share /> Share Offer
                      </Button>
                      <Button color="danger" size="lg">
                        <ShoppingCart /> Shop now
                      </Button>
                    </div>
                  </GridItem>
                </GridContainer> */}
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
        </Carousel>
      </div>
      {/* HEADER 3 END */}
    </div>
  );
}
