import React, { useState, useRef, useEffect } from "react";
import { Button, Paper, Stack, Typography, Grid, Container, TextField } from "@mui/material";
import { CopyBlock, atomOneDark as codeTheme  } from "react-code-blocks";

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
            elevation={0}
        >
            <Wrapper>
                <Stack spacing={2}>


                    <ProjectWindow>
                        <Project code={props.project.code}/>
                    </ProjectWindow>

                    <Typography variant={"h2"} fontWeight={700}>
                        {props.project.name}
                    </Typography>
                    
                    <Typography>
                        {props.project.description}
                    </Typography>

                    { props.project.useCases && props.project.useCases.length > 0 && 
                        (
                            <Typography variant={"h3"} fontWeight={700}>
                                Use Cases
                            </Typography>
                        )
                    }

                    <ul>
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

                    <Typography variant={"h3"} fontWeight={700}>
                        Implementation Steps
                    </Typography>

                    <ul>
                        { props.project.implementationSteps.map( (step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>

                    { props.project.algorithmImplementation && (
                        <>
                            <Typography variant={"h3"} fontWeight={700}>
                                Algorithm Code Example
                            </Typography>

                            <CopyBlock
                                text={props.project.algorithmImplementation}
                                language={"typescript"}
                                wrapLines
                                theme={codeTheme}
                            />
                        </>
                    )}


                    { props.project.code && (
                        <>
                            <Typography variant={"h3"} fontWeight={700}>
                                React Implementation
                            </Typography>

                            <CopyBlock
                                text={props.project.code}
                                language={"typescript"}
                                wrapLines
                                theme={codeTheme}
                            />
                        </>
                    )}


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