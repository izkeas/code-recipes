import ProjectPage from "@/components/ProjectPage";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import projects, { ProjectObj } from "@/tempData/projects";
import { useEffect, useState } from "react";

async function getProjectFromName(name : string){
    const request = await fetch("/api/project", {
        method : "POST",
        body : JSON.stringify({ "name" : name}),
        headers : { 
            "Accept" : "Application/json",
            "Content-Type" : "Application/json"
        }
    })

    const result = await request.json();
    return result;
}

export default function Project(){
    const router = useRouter();
    const {id } = router.query;
    const [project, setProject ] = useState<ProjectObj>();

    useEffect( () => {
        async function getProject(){
            if (typeof id === "string"){
                setProject( await getProjectFromName(id));
            }
        }

        getProject();
    }, [id])
    
    return (
        <Container>
            {project && (
                <ProjectPage project={project}/>
            )}

            { project === null && (
                <p>INVALID PROJECT NOT FOUND</p>
            )}
        </Container>
    )
}