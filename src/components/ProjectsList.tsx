import { Grid } from "@mui/material";
import Project from "./Project";

export default function ProjectList(){
    
    return (
        <Grid container spacing={2}
            style={{
            }}
        >
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Project/>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Project/>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Project/>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Project/>
            </Grid>

        </Grid>
    )
}