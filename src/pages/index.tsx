import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import LogoSvg from "@/components/logoIcon";
import LogoText from "@/components/LogoText";


export default function Index(){

    return (
        <Container>
            <Grid container>

                <Grid item xs={8}>
                    <Container>
                        <div
                            style={{
                                margin : "auto",
                                width : "400px"
                            }}
                        >
                            <LogoSvg/>
                            <LogoText/>
                        </div>
                    </Container>
                </Grid>

                <Grid item>
                    <Stack  justifyContent={"center"}
                        style={{
                            height : "100%",
                            margin : "auto"
                        }}
                    >
                        <Button>
                            <Typography variant={"h4"}>
                                Algorithms
                            </Typography>
                        </Button>
                        
                        <Button>
                            <Typography variant={"h4"}>
                                Templates
                            </Typography>
                        </Button>

                        <Button>
                            <Typography variant={"h4"}>
                                Design Patterns
                            </Typography>
                        </Button>

                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}