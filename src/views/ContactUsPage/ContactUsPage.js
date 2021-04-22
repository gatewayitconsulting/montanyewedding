/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 38.6298146, lng: -90.1944767 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 38.6298146, lng: -90.1944767 }} />
    </GoogleMap>
  ))
);

const useStyles = makeStyles(contactUsStyle);
const API_KEY = process.env.MAPS_API_KEY;

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Montanye Wedding"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="dark"
      />
      <div className={classes.bigMap}>
        <CustomSkinMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgAGtvR0417DJdKsdU1-UohznYCBeC5ec"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `100%`,
                borderRadius: "6px",
                overflow: "hidden"
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2>RSVP Coming Soon</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p>
                  Check back soon to RSVP for the wedding.
                </p>
                <p>
                  We will be sending out reminders through our Save the Date emails.
                </p>
                <p>
                  If you have any questions in the meantime, please contact us by
                  <a href="mailto:gatewayitconsulting@outlook.com" title="Email us at Gateway IT Consulting."> email</a>.
                </p>
                {/* <p>
                  You can contact us with anything related to our Products. We
                  {"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="primary" round>
                      Contact us
                    </Button>
                  </div>
                </form> */}
              </GridItem>
              {/* <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title="Find us at the office"
                  description={
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest,{" "}
                      <br /> Romania
                    </p>
                  }
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Give us a ring"
                  description={
                    <p>
                      Michael Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                      8:00-22:00
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Legal Information"
                  description={
                    <p>
                      Creative Tim Ltd. <br /> VAT · EN2341241 <br /> IBAN ·
                      EN8732ENGB2300099123 <br /> Bank · Great Britain Bank
                    </p>
                  }
                  icon={BusinessCenter}
                  iconColor="primary"
                />
              </GridItem> */}
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer
        theme="dark"
        content={
          <div>
            <div className="footer-brand">
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://gatewayitconsulting.com"
                target="_blank"
                className={classes.aClasses}
              >
                Gateway IT Consulting
              </a>{" "}
              All Rights Reserved.
            </div>
            <div className="footer-privacy-policy">
              <Link to="/privacy-policy" title="To privacy policy page">
                  Privacy Policy
              </Link>
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} md={6}>
            <h5>About Us</h5>
            <p>
              This website has been created by Lauren and John. Lauren used her
              design eye and John used his skills in web development to create
              this website.{" "}
            </p>
            <p>
              <b>Technology used:</b> Creative Tim Material Design theme customized
              using React, HTML5, SASS, and some 3rd parties to handle the
              heavy lifting in the backend.{" "}
            </p>
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  );
}
