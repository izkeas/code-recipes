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
            main : "#25bcf8"
        },

        text : {
            primary : "#E2E2E2",
            secondary : "#747880"
        },

        background : {
            default : "#131417",
            paper : "#24262A"
        },
    }
});

export default theme;