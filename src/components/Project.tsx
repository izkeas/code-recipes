import React, { useState, useEffect } from "react";
import { Button, Stack, Typography, Grid, Container, TextField } from "@mui/material";

import reactStrToComponent from "@/utils/ReactStrToComponent";

export default function Project(props : {code : string}){
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