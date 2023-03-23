import { AppBar, Toolbar, Typography, Container, Stack, Button, Grid } from "@mui/material";
import Link from "next/link";
import LogoSvg from "./logoIcon";

export default function NavBar() {

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

                            {/* PAges list only desktop */}
                            <Grid item 
                                sx={{
                                    display : {xs : "none", md : "block"}
                                }}
                            >
                                <Link href={"/projects"}>
                                    <Button>
                                        Projects
                                    </Button>
                                </Link>
                            </Grid>


                            {/* Menu only phone*/}
                            <Grid item xs={4}

                                sx={{
                                    display : {xs : "flex", md : "none"},
                                    flexDirection : "row-reverse",
                                    alignContent : "flex-end",
                                    alignItems : "flex-end"
                                }}

                            >
                                <Link href={"/projects"}>
                                    <Button>
                                        Menu
                                    </Button>
                                </Link>
                            </Grid>

                        </Grid>

                    </Container>

                </Toolbar>
        </AppBar>
    )
}