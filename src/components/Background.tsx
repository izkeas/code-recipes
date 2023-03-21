import { useTheme } from "@mui/material";
import React from "react";

export default function Background(props : { children : React.ReactNode}){
    const theme = useTheme();

    return (
        <div
            style={{
                backgroundColor: theme.palette.background.default,
                minHeight : "100vh",
                minWidth : "100vw"
            }}
        >
            {props.children}
        </div>
    )
}