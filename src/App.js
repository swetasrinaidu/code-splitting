import logo from './logo.svg';
import './App.css';
import React from 'react';
import Page1 from './components/Page1';
// import Page2 from './components/Page2'; // not for code splitting
// import Page3 from './components/Page3'; // not for code splitting
import AsyncComponent from './components/AsyncComponents'

class App extends React.Component{
  constructor() {
    super();
    this.state={
      route:"page1",
      component:null
    }
  }

  onClickReact=(route)=>{
    console.log(this.state.route)
    //not for code-splitting
    this.setState({route:route}); 
    // if(route === 'page1'){
    //   this.setState({route:route});
    // }else if(route === 'page2'){ // default import works bcoz of webpack
    //   import('./components/Page2').then((Page2)=>{
    //       this.setState({route:route,component:Page2.default})})
    // }else if(route === 'page3'){
    //   import('./components/Page3').then((Page3)=>{
    //       this.setState({route:route,component:Page3.default})})
    // }
  }
  
  render(){
  //   if(this.state.route==="page1") 
  //     return(<Page1 onReact={this.onClickReact}/>);
  //   else 
  //     return(<this.state.component onReact={this.onClickReact}/>);
  // }
  if(this.state.route === 'page1'){
       return(<Page1 onReact={this.onClickReact}/>);}
  else if(this.state.route === 'page2'){
       const AsyncPage2 = AsyncComponent(()=>import('./components/Page2'));
       return(<AsyncPage2 onReact={this.onClickReact}/>);}
  else if(this.state.route === 'page3'){
    const AsyncPage3 = AsyncComponent(()=>import('./components/Page3'));
    return(<AsyncPage3 onReact={this.onClickReact}/>);}
}
}

export default App;
