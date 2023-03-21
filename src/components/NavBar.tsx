import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import Link from "next/link";


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
            <Container>
                <Toolbar>
                    <Link href={"/"}>
                        <Typography variant="h3">
                            Programming Recipes
                        </Typography>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}