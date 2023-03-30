import React, { useEffect, useRef, useState } from "react"
import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
interface Props {
    children : React.ReactNode;
}

export function ProjectWindow(props : Props) {
    const myElementRef = React.useRef<HTMLDivElement>(null); 
    const [isFullScreen, setIsFullScreen] = React.useState(false);
    const [scrollActive, setScrollActive] = React.useState(false);

    useEffect( () => {
        if ((myElementRef.current?.scrollHeight || 0) > (myElementRef.current?.clientHeight || 0)){
            setScrollActive(true);
        }
        else{
            setScrollActive(false);
        }

    }, [myElementRef.current?.scrollHeight, myElementRef.current?.clientHeight])

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
                minHeight : "400px",
                maxHeight : "400px",
                background : "#141414",
                margin : "auto",
                display : "block",
                overflow : "scroll",
                position : "relative",
            }}
        >
                <div
                >
                    {props.children}
                </div>

                <Stack direction={"row"}
                    sx={{
                        position: scrollActive ? "sticky" :  isFullScreen ? "fixed" : "absolute",
                        bottom : 0, right : 0
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