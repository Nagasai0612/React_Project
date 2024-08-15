import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  
  <App/>

  </>
)

/**App.js 
import React, { Suspense } from "react";
//import About from './About'
const About = React.lazy(()=>import('./About'))
const App=()=>{
  return (
    <>
    <h1>Hello, World!</h1>
    <Suspense fallback={<div>please wait....</div>}>
    <About/>
    </Suspense>
    
    </>
    );
}

export default App*/

/*About.js
import React from "react";

export default function About(){    
    return (
        <>
        <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
       <h1>About</h1>
        </>
        );
} */
