import ProjectPage from "@/components/ProjectPage";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import projects, { ProjectObj } from "@/tempData/projects";


function getProjectFromName(name : string){
    for ( const proj of projects){
        if (proj.name === name){
            return proj;
        }
    }
    return null;
}

export default function Project(){
    const router = useRouter();
    const {id } = router.query;

    let projectObj : ProjectObj | null = null;
    
    if (typeof id === "string" ){
        projectObj = getProjectFromName(id || "");
    }
    
    return (
        <Container>
            {projectObj && (
                <ProjectPage project={projectObj}/>
            )}

            { projectObj === null && (
                <p>INVALID PROJECT NOT FOUND</p>
            )}

        </Container>
    )
}