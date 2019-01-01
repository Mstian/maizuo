import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from "./components/page"
import axios from "axios"
import "./iconfont/iconfont.css"
class App extends Component {
   render(){
       return (
           <div>
               <Nav/>
           </div>
       )
   }  
}

export default App;
