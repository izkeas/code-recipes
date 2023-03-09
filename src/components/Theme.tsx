import { createTheme } from "@mui/material";

const theme =  createTheme({
    typography : {
        fontSize : 16,

        h1: {
            fontSize: "52px",
            fontWeight : 600
        },

        h2: {
            fontSize: "42px",
            fontWeight : "600"
        },

        h3: {
            fontSize: "26px",
            lineHeight: "24px"
        },

        h4 : {
            fontSize : "18px",
            lineHeight : "20px"
        },

        body1 : {
            fontSize: "17px",
            lineHeight: "22px"
        }
    },

    palette : {
        mode : "dark",

        primary : {
            main : "#63D4D4"
        },

        text : {
            primary : "#ECECEC",
            secondary : "#798686"
        },

        background : {
            default : "#151717",
            paper : "#212424"
        }

    }
});

export default theme;