import Wrapper from "@/components/Wrapper";
import { Container, Input, Paper, Typography } from "@mui/material";
import { js_beautify } from "js-beautify"
import React from "react";

export default function NewProject(){

    const [codeText, setCodeText] = React.useState("");
    const [textAreaHeight, setHeight] = React.useState(0);
    const [timeout, setTimeout_] = React.useState<NodeJS.Timer | undefined>(undefined);

    return (
        <Container 
            style={{
                maxWidth : "1500px"
            }}
        >
            <Paper
                elevation={0}

                style={{
                    overflow: "hidden"
                }}
                
            >
                <Wrapper>
                    <Typography variant="h3">
                        Create new project
                    </Typography>

                    <div
                        style={{
                            position : "relative"
                        }}
                    >

                    </div>

                    <textarea
                            style={{
                                border : "none", 
                                outline : "none", 
                                resize : "none", 
                                width : "100%",

                                fontSize : "inherit",
                                padding : "8px",

                                lineHeight : 1.66667, 
                                fontFamily : "inherit", 
                                whiteSpace : "pre",
                                letterSpacing : "0.00938em",
                                height : "500px"
                            }}

                            value={codeText}

                            onChange={ 
                                (ev) => {
                                    ev.preventDefault();
                                    setCodeText(ev.target.value)


                                    if (timeout){
                                        clearTimeout(timeout);
                                    }

                                    setTimeout_( setTimeout(() => {
                                        setCodeText(js_beautify(ev.target.value));                                        
                                    }, 2000))
                                }
                            }
                        >
                    </textarea>
                </Wrapper>
            </Paper>
        </Container>
    )
}               