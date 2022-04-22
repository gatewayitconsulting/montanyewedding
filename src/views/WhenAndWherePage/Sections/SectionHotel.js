/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// react components used to create a google map
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
// @material-ui/icons
import ExploreIcon from '@material-ui/icons/Explore';
import MapIcon from '@material-ui/icons/Map';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Chip from '@material-ui/core/Chip';

// Styles
import whenAndWhereStyle from "assets/jss/material-kit-pro-react/views/whenAndWhereStyle.js";

const useStyles = makeStyles(whenAndWhereStyle);

const LeMeridienMap = withScriptjs(
    withGoogleMap(() => (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 38.6286391, lng: -90.1951171 }}
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
            <Marker position={{ lat: 38.6286391, lng: -90.1951171 }} />
        </GoogleMap>
    ))
);

const CourtyardMap = withScriptjs(
    withGoogleMap(() => (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 38.6310322, lng: -90.1925109 }}
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
            <Marker position={{ lat: 38.6310322, lng: -90.1925109 }} />
        </GoogleMap>
    ))
);

export default function SectionHotel({ ...rest }) {
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
                                        Hotels
                                    </h2>
                                    <p>
                                        Need a place to stay? Check out one of these hotels in walking distance of the venue!
                                    </p>
                                    <div className={classes.sectionSpace} />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem
                                    xs={12}
                                    md={8}
                                    className={
                                        classes.mlAuto + " " + classes.mrAuto
                                    }
                                >
                                    <h2 className={classes.title + " " + classes.customHotelTitle}>
                                        Le Méridien St. Louis Downtown - Marriott
                                    </h2>
                                    <a href="https://www.marriott.com/en-us/hotels/stlmo-le-meridien-st-louis-downtown/overview/" target="_blank" rel="noopener" style={{ marginRight: '.5em' }}>
                                        <Button className={classes.websiteColor} title="To Le Méridien St. Louis Downtown's website">
                                            <ExploreIcon /> See hotel rates
                                        </Button>
                                    </a>
                                    <a href="https://goo.gl/maps/1hR5F1Thi35o4qVcA" target="_blank" rel="noopener">
                                        <Button className={classes.websiteColor} title="To Google Map for Le Méridien St. Louis Downtown">
                                            <MapIcon /> View map
                                        </Button>
                                    </a>
                                    <p style={{ marginTop: '1em' }}>
                                        "Experience a new era in St. Louis at our hotel's historic downtown building. Built in 1913 and added to the National Register of Historic Places in 1984, the design of Le Méridien St. Louis Downtown focuses on modern art blended with touches of the property's history. Our hotel sits less than a mile from the Gateway Arch and half a mile from America's Center Convention Complex and the Enterprise Center, a year-round sporting venue. We are also a few blocks from Busch Stadium and an easy drive from Forest Park, home to the St. Louis Zoo, the Missouri History Museum, the St. Louis Science Center and the Municipal Theatre Association. Maintain your workout downtown in our hotel's spacious, 24-hour fitness center. Savor a steak dinner at our on-site restaurant, Prime 55, or sample gelato at Le Scoop. Retire to a contemporary hotel room with signature Serta mattresses, rainfall showerheads and modern art. Wake up ready for a new day at Le Méridien St. Louis Downtown."
                                    </p>
                                    <p>
                                        <b>We are currently looking into any package deals for securing group rates. Please check back soon for more information.</b>
                                    </p>
                                </GridItem>
                                <GridItem
                                    xs={12}
                                    md={4}
                                    className={
                                        classes.mlAuto + " " + classes.mrAuto
                                    }
                                >
                                    <Chip
                                        className={
                                            classes.distanceChip
                                        }
                                        color="primary"
                                        icon={<DirectionsWalkIcon style={{ color: '#FFF' }} />}
                                        label="Distance 0.1 miles (3 min walk)"
                                        style={{ marginBottom: '1em', color: '#FFF', backgroundColor: '#222' }} />
                                    <div className={classes.bigMap}>
                                        <LeMeridienMap
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
                                </GridItem>
                            </GridContainer>
                            <GridContainer style={{ marginTop: '2em', marginBottom: '2em', paddingBottom: '2em' }}>
                                <GridItem
                                    xs={12}
                                    md={8}
                                    className={
                                        classes.mlAuto + " " + classes.mrAuto
                                    }
                                >
                                    <h2 className={classes.title + " " + classes.customHotelTitle}>
                                        Courtyard St. Louis Downtown/Convention Center - Marriott
                                    </h2>
                                    <a href="https://www.marriott.com/en-us/hotels/stldw-courtyard-st-louis-downtown-convention-center/overview/" target="_blank" rel="noopener" style={{ marginRight: '.5em' }}>
                                        <Button className={classes.websiteColor} title="To Courtyard St. Louis Downtown/Convention Center's website">
                                            <ExploreIcon /> See hotel rates
                                        </Button>
                                    </a>
                                    <a href="https://goo.gl/maps/NK8JWnM2FDDq9XJL8" target="_blank" rel="noopener">
                                        <Button className={classes.websiteColor} title="To Google Map for Courtyard St. Louis Downtown/Convention Center">
                                            <MapIcon /> View map
                                        </Button>
                                    </a>
                                    <p style={{ marginTop: '1em' }}>
                                        "Located right in the heart of downtown, Courtyard St. Louis Downtown/Convention Center is just steps away from countless restaurants and locales, including Busch Stadium, the City Museum and America's Convention Center Complex. After diving into the surrounding area, unwind in the comfort of our rooms and suites, complete with complimentary Wi-Fi, mini-refrigerators and pillowtop mattresses for your utmost relaxation. When hunger arises, stop by The Bistro for a delectable breakfast and dinner. Our active travelers can keep up their exercise routine courtesy of our 24-hour fitness center. Need to host an event? Reserve one of our two venues for your business meeting or social gathering. Feel free to utilize our available catering options and high-performance AV equipment to enhance your special occasion. Whether traveling for work or pleasure, Courtyard St. Louis Downtown/Convention Center provides the friendly service and thoughtful amenities necessary for a successful stay in the Gateway to the West."
                                    </p>
                                    <p>
                                        <b>We are currently looking into any package deals for securing group rates. Please check back soon for more information.</b>
                                    </p>
                                </GridItem>
                                <GridItem
                                    xs={12}
                                    md={4}
                                    className={
                                        classes.mlAuto + " " + classes.mrAuto
                                    }
                                >
                                    <Chip
                                        className={
                                            classes.distanceChip
                                        }
                                        color="primary"
                                        icon={<DirectionsWalkIcon style={{ color: '#FFF' }} />}
                                        label="Distance 0.2 miles (4 min walk)"
                                        style={{ marginBottom: '1em', color: '#FFF', backgroundColor: '#222' }} />
                                    <div className={classes.bigMap}>
                                        <CourtyardMap
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
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
