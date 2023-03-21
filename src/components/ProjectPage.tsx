import React, { useState, useRef, useEffect } from "react";
import { Button, Paper, Stack, Typography, Grid, Container, TextField } from "@mui/material";
import { CopyBlock, dracula } from "react-code-blocks";

import Wrapper from "./Wrapper";
import reactStrToComponent from "@/utils/ReactStrToComponent";
import { ProjectWindow } from "./ProjectWindow";

import { ProjectObj } from "@/tempData/projects";

interface Props {
    project : ProjectObj;
}

export function Project(props : {code : string}){
    const [ProjectComponent, setProjectComponent] = useState<() => JSX.Element>();

    useEffect(() => {
        const component = reactStrToComponent(props.code, React, { Typography, Button, Stack, Grid, Container, TextField});
        setProjectComponent(component);
    
    }, [props.code])

    return (
        <div>
            { ProjectComponent && (
                <ProjectComponent/>
            )}
        </div>
    )
}

export default function ProjectPage(props : Props){

    return (
        <Paper
            sx={{
                overflow : "auto",
            }}
        >
            <Wrapper>
                <Stack spacing={2}>

                    <Typography variant={"h1"}>
                        {props.project.name}
                    </Typography>

                    <ProjectWindow>
                        <Project code={props.project.code}/>
                    </ProjectWindow>

                    <Typography>
                        {props.project.description}
                    </Typography>

                    { props.project.useCases && props.project.useCases.length > 0 && 
                        (
                            <Typography variant={"h2"}>
                                Use Cases
                            </Typography>
                        )
                    }

                    <ul
                    >
                        { 
                            props.project.useCases && 
                            props.project.useCases.length > 0 && 
                            props.project.useCases.map( (useCase) => (
                                <li key={useCase}>
                                    {useCase}
                                </li>
                            ))
                        }
                    
                    </ul>

                    <Typography variant={"h2"}>
                        Implementation
                    </Typography>

                    <ul>
                        { props.project.implementationSteps.map( (step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>

                    <CopyBlock
                        text={props.project.code}
                        language={"typescript"}
                        wrapLines
                        theme={dracula}
                    />

                    { props.project.references && props.project.references.length > 0 && 
                        (
                            <Typography variant={"h2"}>
                                Use Cases
                            </Typography>
                        )
                    }

                    <ul
                    >
                        { 
                            props.project.references && 
                            props.project.references.length > 0 && 
                            props.project.references.map( (useCase) => (
                                <li key={useCase}>
                                    <a href={useCase}>{useCase}</a>
                                </li>
                            ))
                        }
                    
                    </ul>

                </Stack>

            </Wrapper>
        </Paper>
    )
}