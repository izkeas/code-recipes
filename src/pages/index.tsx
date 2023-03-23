import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import LogoSvg from "@/components/logoIcon";
import LogoText from "@/components/LogoText";


export default function Index(){

    return (
        <Container>

            <Grid item xs={8}>
                <Container>
                    <div
                        style={{
                            margin : "auto",
                            width : "400px",
                            marginTop : "50px"
                        }}
                    >
                        <LogoSvg
                            style={{
                                transform: "rotate()"
                            }}
                        />
                        <LogoText/>
                    </div>
                </Container>
            </Grid>

        </Container>
    )
}