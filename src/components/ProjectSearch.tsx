import { TextField, Grid, Select, MenuItem, Button, OutlinedInput, InputLabel, FormControl, SelectChangeEvent } from "@mui/material";
import React from "react";

interface Props {
    onChangeQuery? : (query : { text : string, tags : string[]}) => void;
}

export default function ProjectSearch(props : Props){

    const [ searchTimeout, setSearchTimeout ] = React.useState<NodeJS.Timeout | undefined>(undefined);
    const [ tags, setTags ] = React.useState<string[]>([]);
    const [ searchText, setSearchText] = React.useState<string>("");


    function onChangeSearchText(event : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ){
        setSearchText(event.target.value);

        if (searchTimeout){
            clearTimeout(searchTimeout)
            setSearchTimeout(undefined);
        }

        setSearchTimeout( setTimeout( () => {

            if (props.onChangeQuery ) 
                props.onChangeQuery({text : event.target.value, tags : []});
            
        }, 1000))
    }

    function onChangeTags(event : SelectChangeEvent<string[]>) {
        const value = event.target.value;
        const newTags =  typeof value === 'string' ? value.split(',') : value;

        setTags(newTags);

        if (props.onChangeQuery)
            props.onChangeQuery( {text: searchText, tags : newTags});
    }

    return (
        <Grid container spacing={2}>

            <Grid item xs={8}>
                
                <TextField
                    id="project-search-field"
                    placeholder={"Search..."}
                    value={searchText}
                    onChange={onChangeSearchText}

                    style={{
                        marginBottom : "40px",
                        width : "100%"
                    }}
                />
            </Grid>

            <Grid item xs={2}>
                <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-multiple-name-label">Category</InputLabel>
                    <Select 
                        input={<OutlinedInput label="Name" />}
                        multiple 

                        value={tags}
                        onChange={onChangeTags}
                        
                        labelId="Categories"
                        id="project-select-tags" 
                        
                        fullWidth
                    >
                        <MenuItem value={"Algorithm"}>
                            Algorithm
                        </MenuItem>
                        <MenuItem value={"Design Pattern"}>
                            Design Pattern
                        </MenuItem>
                        <MenuItem value={"Template"}>
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