import { useState } from "react"

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

  // function increment(){
  //   setState(state + 1)
  // }

  return ( 
    <div>
      <button
            onClick={deecrement}
            >-</button>
      <span style={{paddingInline: "10px", fontSize:"18px"}}>{state}</span>
      <button
      // callback function = set state
            onClick={() => setState(state + 1)}
            >+</button>
    </div>
  )
}

export default App