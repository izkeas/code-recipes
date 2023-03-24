import { Paper, Typography, Stack } from "@mui/material";
import { maxWidth } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

interface Props {
    name : string;
    description : string;
    imageURL? : string;
}

export default function ProjectItem(props : Props){

    return (
        <Link href={`/projects/${props.name}`}>
            <div>
                <Stack spacing={2}> 
                    <Paper
                        sx={{
                            maxWidth : "100%"
                        }}
                    >
                        <div
                            style={{
                                margin : "5px"
                            }}
                        >
                            <Image
                                alt="test"
                                src={props.imageURL || ""}
                                width={950}
                                height={400}

                                style={{
                                    maxWidth : "100%",
                                    height : "auto"
                                }}
                            />

                        </div>
                    </Paper>

                    <Stack spacing={1}>                
                        <Typography variant={"h3"}>
                            {props.name}
                        </Typography>

                        <Typography 
                            sx={{
                                overflow : "hidden",
                                height : "40px"
                            }}
                        >
                            {props.description}
                        </Typography>

                    </Stack>
                </Stack>
            </div>
        </Link>
    )
}