import { useState } from "react"
import { Button } from "./components/button-component";
import { Counter } from "./components/counter";
import {List} from "./components/list"

function App() {

  // can get a parameter or ayy or obj => initilazer
  // hook
  // state of something and something that updates that state
  // Setup Part of the component => this that are written here can be find in tscconfig.json
  const [state, setState] = useState(0)
  console.log(state, setState);

  function deecrement(){
      if(state > 0){
        setState(state - 1)
      }
  }

  function increment(){
    setState(state + 1)
  }

  const animals = ["elephant", "zebra", "goat", "bear", "chicken"]

  return ( 
    <div>
      {/* <button
            onClick={deecrement}
            >-</button> */}
      <Button onClick={deecrement}>-</Button>
      <span style={{paddingInline: "10px", fontSize:"18px"}}>{state}</span>
      <Button onClick={increment}>+</Button>
      {/* <button
      // callback function = set state
            onClick={() => setState(state + 1)}
            >+</button> */}
      <Counter/>
      <h2>List Example</h2>
      <List list={animals}/>
    </div>
  )
}

export default App