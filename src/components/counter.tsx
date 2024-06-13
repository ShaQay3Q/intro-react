import { useState } from "react"
import { Button } from "./button-component";
import { CounterDisplay } from "./conter-display";


export function Counter(){

    const [state, setState] = useState(0)

    function deecrement(){
        if(state > 0){
          setState(state - 1)
        }
    }

    function increment(){
        setState(state + 1)
      }

    return (

        // return returns only one element ==> multiply elements should be wrapped in a div
        <div>
            <Button onClick={deecrement}>-</Button>
            <CounterDisplay count={state} />
            <Button onClick={increment}>+</Button>
        </div>
    )
}

