import logo from '../logo.svg';
import React from 'react';

function Page2({onReact}){
   return(
    <div>
        <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={()=>onReact("page1")}>Page1</button>
        <button className='disabled'>Page2</button>
        <button onClick={()=>onReact("page3")}>Page3</button>

    </div>
   );
}

export default Page2;