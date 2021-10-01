import {
    container,
    title,
    main,
    mainRaised,
    mlAuto,
    description
} from "assets/jss/material-kit-pro-react.js";
import imagesStyles from "../imagesStyles";

const vendorsStyle = {
    main,
    mainRaised,
    title,
    mlAuto,
    description,
    container: {
        ...container,
        maxWidth: "970px !important"
    },
    whenAndWhereContent: {
        paddingBottom: "40px",
        paddingTop: "40px"
    },
    info: {
        paddingBottom: "10px",
        paddingTop: 0
    },
    textCenter: {
        textAlign: "center !important"
    },
    block: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        textDecoration: "none",
        position: "relative",
        display: "block"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    },
    blackBG: {
        backgroundColor: "black"
    },
    customTitle: {
        fontSize: "1.75rem !important",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        marginBottom: ".5em"
    },
    facebookColor: {},
    instagramColor: {
        backgroundImage: "linear-gradient(to right bottom, #fcd424, #ffb700, #ff9a00, #fc7a00, #f75811, #f64328, #f32a38, #ed0046, #e9005c, #e10072, #d30088, #c0049c)"
    },
    pinterestColor: {
        backgroundColor: "#E60022"
    },
    websiteColor: {
        backgroundColor: "#222"
    },
    ...imagesStyles
};

export default vendorsStyle;
