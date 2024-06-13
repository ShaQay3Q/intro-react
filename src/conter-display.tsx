import { useEffect } from "react"

type Props = {
    count: number
}

export function counterDisplay({count}: Props){
    useEffect(() => {
    console.log("rendered");
    console.log(count);
    }, [count])
    
    return(
        <span style={{paddingInline: "10px"}}>{count}</span>
    )
}