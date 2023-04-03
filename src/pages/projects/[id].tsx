import { Container, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ProjectObj } from "@/tempData/projects";
import { useEffect, useState } from "react";

import ProjectWindow  from "@/components/ProjectWindow";
import Wrapper from "@/components/Wrapper";
import Project from "@/components/Project";

import { CopyBlock, atomOneDark as codeTheme  } from "react-code-blocks";


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

interface Props {
    project : ProjectObj;
}

export default function ProjectPage(){
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
                <Paper
                    elevation={0}
                    style={{
                        overflow : "hidden"
                    }}
                >
                <Wrapper>
                    <Stack spacing={2}>
                        <ProjectWindow>
                            <Project code={project.code}/>
                        </ProjectWindow>

                        <Typography variant={"h2"} fontWeight={700}>
                            {project.name}
                        </Typography>
                        
                        <Typography>
                            {project.description}
                        </Typography>

                        { project.useCases && project.useCases.length > 0 && 
                            (
                                <Typography variant={"h3"} fontWeight={700}>
                                    Use Cases
                                </Typography>
                            )
                        }

                        <ul>
                            { 
                                project.useCases && 
                                project.useCases.length > 0 && 
                                project.useCases.map( (useCase) => (
                                    <li key={useCase}>
                                        {useCase}
                                    </li>
                                ))
                            }
                        
                        </ul>

                        <Typography variant={"h3"} fontWeight={700}>
                            Implementation Steps
                        </Typography>

                        <ul>
                            { project.implementationSteps.map( (step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>

                        { project.algorithmImplementation && (
                            <>
                                <Typography variant={"h3"} fontWeight={700}>
                                    Algorithm Code Example
                                </Typography>

                                <CopyBlock
                                    text={project.algorithmImplementation}
                                    language={"typescript"}
                                    wrapLines
                                    theme={codeTheme}
                                />
                            </>
                        )}


                        { project.code && (
                            <>
                                <Typography variant={"h3"} fontWeight={700}>
                                    React Implementation
                                </Typography>

                                <CopyBlock
                                    text={project.code}
                                    language={"typescript"}
                                    wrapLines
                                    theme={codeTheme}
                                />
                            </>
                        )}


                        { project.references && project.references.length > 0 && 
                            (
                                <Typography variant={"h2"}>
                                    Use Cases
                                </Typography>
                            )
                        }

                        <ul
                        >
                            { 
                                project.references && 
                                project.references.length > 0 && 
                                project.references.map( (useCase) => (
                                    <li key={useCase}>
                                        <a href={useCase}>{useCase}</a>
                                    </li>
                                ))
                            }
                        
                        </ul>

                    </Stack>

                </Wrapper>
                </Paper>

            )}

            { project === null && (
                <p>INVALID PROJECT NOT FOUND</p>
            )}
        </Container>
    )
}