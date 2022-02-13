import {
    container,
    title,
    main,
    mainRaised,
    mlAuto,
    description
} from "assets/jss/material-kit-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js";

import buttonInput from "assets/jss/material-kit-pro-react/components/buttonStyle.js";
import dark from "assets/jss/material-kit-pro-react/components/buttonStyle.js";

const formSuccessStyle = {
    main,
    mainRaised,
    title,
    mlAuto,
    description,
    ...customCheckboxRadioSwitch,
    ...buttonInput,
    ...dark,
    container: {
        ...container,
        maxWidth: "970px !important"
    },
    contactContent: {
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
    customTitle: {
        fontSize: "3rem !important",
        textAlign: "center"
    },
    label: {
        color: "#585858",
        fontSize: ".85rem"
    }
};

export default formSuccessStyle;
