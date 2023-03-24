const code = `function ProjectCode(){
    const [counter, setCounter] = React.useState<number>(0);

    return (
        <div>
            <Typography variant="h3"
                style={{
                    padding : "10px",
                    textAlign : "center",
                    marginTop : "150px"
                }}
            >
                Count : {counter}
            </Typography>
            
            <Button
                style={{
                    margin : "auto",
                    display : "block"
                }}
            
                onClick={
                    (ev) => setCounter( counter + 1)
                }
            >
                CLICK HERE
            </Button>
        </div>
    )
}

return ProjectCode;
`

const codeObj = {
    code  : code,
    reactImplementation : code
}

export default codeObj;