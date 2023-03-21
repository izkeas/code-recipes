import { Grid } from "@mui/material";
import ProjectItem from "./ProjectItem";
import projects, {ProjectObj} from "@/tempData/projects";

interface Props {
    projects : ProjectObj[]
}

export default function ProjectList(props : Props){
    
    return (
        <Grid container spacing={3}
            style={{
            }}
        >
            { props.projects.map( (projectObj) => (
                <Grid key={projectObj.name} item xs={12} sm={6} md={4} lg={3.5}>
                    <ProjectItem name={projectObj.name} description={projectObj.description} imageURL={projectObj.imageURL}/>
                </Grid>
                
            ))}
        </Grid>
    )
}