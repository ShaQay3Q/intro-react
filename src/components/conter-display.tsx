import { useEffect } from "react"

type Props = {
    count: number
}

export function CounterDisplay({count}: Props){
    // get rid of loging twice of something
    useEffect(() => {
    console.log("rendered");
    console.log(count);
    localStorage.setItem("count", count.toString())

    }, [count])
    
    return(
        <span style={{paddingInline: "10px"}}>{count}</span>
    )
}