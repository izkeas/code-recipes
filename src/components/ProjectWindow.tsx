import React, { useState } from "react"
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
interface Props {
    children : React.ReactNode;
}

export function ProjectWindow(props : Props) {
    const myElementRef = React.useRef<HTMLDivElement>(null); 
    const [isFullScreen, setIsFullScreen] = React.useState(false);

    function setFullScreen() {
        const element = myElementRef.current;

        if (document.fullscreenElement){
            document.exitFullscreen();
            setIsFullScreen(false);
        }
        else{
            if (element){
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                    setIsFullScreen(true);
                }
            }
        }
    }

    return (
        <div ref={myElementRef}
            style={{
                width :"80%",
                height : "400px",
                background : "#141414",
                margin : "auto",
                display : "block",
                overflow : "none",
                position : "relative",
            }}
        >
            {props.children}
                <Stack
                    direction={"row"}
                    sx={{
                        position: isFullScreen === false ? "absolute" : "fixed",
                        right : 0, bottom : "20px",
                    }}
                >
                    <Button>
                        Code
                    </Button>
                    <Button onClick={() => {setFullScreen()} }>
                        FullScreen
                    </Button>
                </Stack>
        </div>
    )
}