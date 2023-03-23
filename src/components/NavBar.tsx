import { AppBar, Toolbar, Typography, Container, Stack, Button, Grid, useTheme } from "@mui/material";
import Link from "next/link";
import LogoSvg from "./logoIcon";
import React from "react";

import {AiOutlineClose} from "react-icons/ai"

interface Props {
    pages : {
      name : string,
      path : string  
    }[]
}

export default function NavBar(props : Props) {
    const theme = useTheme();
    const [ menuPanelVisible, setMenuPanelVisible] = React.useState(true);

    return (
        <AppBar 
            style={{
                position : "relative",
                marginBottom : "20px",
                padding : 0
            }}

            elevation={0}
        >
                <Toolbar>
                    <Container>
                        <Grid container>
                            <Grid item xs={8}>
                                <Link href="/">

                                    <Stack direction={"row"}>
                                        <LogoSvg 
                                                style={{
                                                    width : "50px",
                                                    height : "50px"
                                                }}
                                            />

                                        <Typography variant="h3"
                                            style={{
                                                marginTop : "auto",
                                                marginBottom : "auto"
                                            }}
                                        >
                                            Code Recipes
                                        </Typography>
                                    </Stack>
                                </Link>
                            </Grid>

                            {/* Pages list only desktop */}
                            <Grid item xs={4}
                                sx={{
                                    display : {xs : "none", md : "flex"},
                                    flexDirection : "row-reverse",
                                    alignItems : "flex-end"
                                }}
                            >

                                { props.pages.map( (page)=> (
                                    <div key={page.name + page.path}>
                                        <Link href={page.path}>
                                            <Button>
                                                {page.name}
                                            </Button>
                                        </Link>
                                    </div>
                                ))}
                            </Grid>

                            {/* Menu only phone*/}
                            <Grid item xs={4}

                                sx={{
                                    display : {xs : "flex", md : "none"},
                                    flexDirection : "row-reverse",
                                    alignItems : "flex-end"
                                }}

                            >
                                <Button
                                    onClick={ () => {setMenuPanelVisible(true)}}
                                >
                                    Menu
                                </Button>
                            </Grid>

                            {/* Menu panel */}
                            <div
                                style={{
                                    display : menuPanelVisible ? "block" : "none",
                                    
                                    position : "fixed",
                                    zIndex : 10,
                                    top : 0,
                                    right : 0,

                                    width : "200px",
                                    height : "100vh",

                                    backgroundColor : "rgba(0,0,0,0.9)",
                                }}
                            >
                                <Button
                                    onClick={ () => {setMenuPanelVisible(false)}}
                                >
                                    <AiOutlineClose 
                                        style={{ width : "40px", height : "auto", color : theme.palette.primary.main}}
                                    />
                                </Button>

                                <Stack flexDirection={"column"} alignItems={"center"}>
                                    { props.pages.map( ( page) => (
                                        
                                        <div key={page.name+page.path}>
                                            <Link href={page.path}>
                                                <Button>{page.name}</Button>
                                            </Link>
                                        </div>
                                    ))}
                                </Stack>
                            </div>
                        </Grid>
                    </Container>
                </Toolbar>
        </AppBar>
    )
}