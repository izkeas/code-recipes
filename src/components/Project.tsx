import { Paper, Typography, Stack } from "@mui/material";
import { maxWidth } from "@mui/system";
import Image from "next/image";

export default function Project(){

    return (
        <div>
            <Stack spacing={2}> 
                <Paper
                    sx={{
                        maxWidth : "100%"
                    }}
                >
                    <div
                        style={{
                            margin : "10px"
                        }}
                    >
                        <Image
                            alt="test"
                            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png"
                            width={477}
                            height={268}

                            style={{
                                maxWidth : "100%",
                                height : "auto"
                            }}
                        />

                    </div>
                </Paper>

                <Stack spacing={1}>                
                    <Typography variant={"h3"}>
                        Binary Tree
                    </Typography>

                    <Typography>
                        Description lorem ipsom dolor siamet this algo description
                    </Typography>
                    
                </Stack>
            </Stack>
        </div>
    )
}