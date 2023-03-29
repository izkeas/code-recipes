import { AppBar, Toolbar, Typography, Container, Stack, Button, Grid, useTheme } from "@mui/material";
import Link from "next/link";
import LogoSvg from "./logoIcon";
import React from "react";

import {AiOutlineClose} from "react-icons/ai"

interface Page {
    name : string,
    path : string  
}

interface Props {
    pages : Page[];
}

interface MenuPanelProps {
    visible : boolean;
    onClose : () => void;
    pages : Page[];
}

interface MenuButtom {
    onClick : () => void;
}

export function MenuButtom(props : MenuButtom){
    return (
        <div id="navbar-menu-buttom">
            <Button
                onClick={ () => { props.onClick() }}
            >
                Menu
            </Button>
        </div>
    )
}

export function MenuPanel(props : MenuPanelProps){
    const theme = useTheme();

    return (
        <div
            style={{
                display : props.visible ? "block" : "none",
                
                position : "fixed",
                zIndex : 10,
                top : 0,
                right : 0,

                width : "200px",
                height : "100vh",

                backgroundColor : "rgba(0,0,0,0.9)",
            }}

            id={"navbar-menu-panel"}
        >
            <Button
                onClick={ () => { props.onClose() }}
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
    )
}

export default function NavBar(props : Props) {
    const [ menuPanelVisible, setMenuPanelVisible] = React.useState(false);

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
                        <Grid item xs={4} id="navbar-pages"
                            sx={{
                                display : {xs : "none", md : "flex"},
                                flexDirection : "row-reverse",
                                alignItems : "flex-end"
                            }}
                        >

                            { props.pages.map( (page) => (
                                <div key={page.name + page.path} >
                                    <Link href={page.path}>
                                        <Button>
                                            {page.name}
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                        </Grid>

                        {/*only on phone*/}
                        <Grid item xs={4}
                            sx={{
                                display : {xs : "flex", md : "none"},
                                flexDirection : "row-reverse",
                                alignItems : "flex-end"
                            }}
                        >
                            <MenuButtom onClick={ () => setMenuPanelVisible(true)}/>
                        </Grid>

                        <MenuPanel 
                            visible={menuPanelVisible}  
                            pages={props.pages}
                            onClose={ () => setMenuPanelVisible(false) }
                        />

                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}