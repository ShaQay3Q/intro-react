import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import { SampleComponent } from './sample-component'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <h1>Hello, World!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus deleniti quisquam cupiditate inventore commodi repellat officiis omnis quibusdam impedit, numquam fugiat necessitatibus placeat, nemo temporibus eveniet reprehenderit? Cum, tenetur.</p>
  
  <button onClick={(event) => console.log(`Button ${event.target} clicked`)}
  >Click me!
    </button>

    // Oldschool element creation
{React.createElement("button", {
      id: "btn",
      className: "btn",
      onClick: () => console.log("clicked"),
      children: React.createElement("span", {
        children: "Click me"
      })
    })} */}

    {/* WRITING THE COMPONANT AS SELF CLOSING TAG */}
    {/* <div className='wrapper'>
    <SampleComponent variant='primary'
    onClick={() => console.log("Button 1 clicked")}
    />
    <SampleComponent variant='secondary'
        onClick={() => console.log("Button 2 clicked")}
        /> */}
    {/* <SampleComponent/>
    <SampleComponent/>
    <SampleComponent/>
    <SampleComponent/>
    <SampleComponent/>
    <SampleComponent/> */}
    {/* </div> */}

    <App />

    
  </React.StrictMode>
);
