import { TextField, Grid, Select, MenuItem, Button, OutlinedInput, InputLabel, FormControl } from "@mui/material";


export default function ProjectSearch(){
    return (
        <Grid container spacing={2}>

            <Grid item xs={8}>
                
                <TextField

                    style={{
                        marginBottom : "40px",
                        width : "100%"
                    }}

                    placeholder={"Search..."}
                />
            </Grid>

            <Grid item xs={2}>
                <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-multiple-name-label">Category</InputLabel>
                    <Select 
                        label="Categories" 
                        name="Categories" 
                        multiple 
                        value={["AA"]}
                        input={<OutlinedInput label="Name" />}
                        fullWidth
                    >
                        <MenuItem>
                            Algorithms
                        </MenuItem>
                        <MenuItem>
                            Design Patterns
                        </MenuItem>
                        <MenuItem>
                            Templates
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={2}>
                <Button variant={"contained"} sx={{height : "55px"}}>
                    Search
                </Button>
            </Grid>


        </Grid>
    )
}