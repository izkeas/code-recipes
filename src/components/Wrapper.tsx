interface Props {
    margin? : string,
    children : React.ReactNode
};

export default function Wrapper( props : Props){


    return (
        <div
            style={{
                margin : props.margin || "10px"
            }}
        >
            {props.children}
        </div>
    )
}