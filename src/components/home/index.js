import React from "react"
import Slide from "./slideShow"
import Tab from "./Tab"
import { NavLink} from "react-router-dom"
class Home extends React.Component{
    render(){
        return (
            <div>
               <Slide></Slide>
               <Tab></Tab>
            </div>
          );
    }
}
export default Home;