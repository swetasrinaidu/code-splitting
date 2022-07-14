import logo from '../logo.svg';
import React from 'react';

function Page3({onReact}){
   return(
    <div>
        <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={()=>onReact("page1")}>Page1</button>
        <button onClick={()=>onReact("page2")}>Page2</button>
        <button className='disabled'>Page3</button>


    </div>
    
   )
}

export default Page3;