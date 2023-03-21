const code = `
function binarySearch(arr : number[], low : number | null, high : number | null, x : number) : number{
    low === null ? low = 0 : 0;
    high === null ? high = arr.length -1: -1;

    if (high >= low){
        // Calculate middle
        const mid = Math.floor((low + high) / 2);

        // If element is at the middle
        if (arr[mid] === x){
            return mid;
        }

        // if element is last than middle
        // return new search ending with middle -1
        if ( arr[mid] > x)
            return binarySearch(arr, low, mid - 1, x);

        
        return binarySearch(arr, mid + 1, high, x);
    }
    return -1;
}

interface SquareProps {
    number : number;
    color : string;
}

function Square(props : SquareProps){
    return (
        <div 
            style={{
                width : "100px",
                height : "100px",

                display : "flex",
                backgroundColor : props.color,

                alignItems: "center",
                justifyContent: "center",

                transitionDuration : "0.5s",
                transitionProperty : "background-color"
            }}
        >

            <Typography
                sx={{
                    color : "black"
                }}
            >
                {props.number}
            </Typography>

        </div>
    )
}

function ProjectCode(){
    const arr = [ 10, 20, 30 ,40, 50 ,60 ,70, 80, 90, 100, 110, 120]
    const [searchValue, setSearchValue ] = React.useState<string>("");
    const [searchIndex, setSearchIndex] = React.useState<number>(-1);
    const [timeElapsed, setTImeElapsed] = React.useState<number>(0);

    return ( 
        <Container>
            <Stack spacing={1}
                sx={{
                    marginTop : "20px"
                }}
            >

                <Grid container spacing={1.2
                    sx={{
                        width : "100%"
                    }}    
                >

                    { arr.map( (x, index ) => (
                        <Grid item key={x} sm={2} md={2} lg={2}>
                            <Square
                                color={ index === searchIndex ? "red" : "orange"}
                                number={x}
                            />
                        </Grid>
                    ))}

                </Grid>

                <Typography variant="h2">
                        Search
                </Typography>

                <TextField
                    placeholder="Insert a number to search for"
                    type={"number"}

                    value={searchValue}
                    
                    onChange={ ( e )=> {

                        if (e.target.value){
                            setSearchValue(e.target.value);
                        }
                        else{
                            setSearchValue("");
                            setSearchIndex(-1);
                        }

                    }}

                    onKeyDown={ 
                        (e)  => {
                            if ((e.key) === "Enter") {
                                if (searchValue){
                                    const timeStart = Date.now()
                                    const index = binarySearch(arr, null, null, Number(searchValue))
                                    const timeEnd =  Date.now();
                                    
                                    const elapsed = (timeEnd - timeStart);
                                    setTImeElapsed(elapsed);
                                    setSearchIndex(index);
                                }
                            }
                        } 
                    }
                />


                <Typography>
                        elapsed : { timeElapsed || "0"}ms
                </Typography>
                
            </Stack>
            
        </Container>
    )
}

return ProjectCode;
`

export default code;