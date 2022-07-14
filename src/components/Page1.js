import logo from '../logo.svg';
import React from 'react';

function Page1({onReact}){
   return(
    <div>
        <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button className='disabled'>Page1</button>
        <button onClick={()=>onReact("page2")}>Page2</button>
        <button onClick={()=>onReact("page3")}>Page3</button>

    </div>
    
   )
}

export default Page1;