import React from "react";
import "../../style/tab.css"
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import Will from "./Will"
import Now from "./Now"
class Tab extends React.Component{
    constructor(){
        super();
        this.state = {
            isShow:0
        }
    }
    changeIsShow(num){
        this.setState({
            isShow:num,
        })
    }
    render(){
        return (
            <div>
                <div className="tab">
                    <span className={this.state.isShow == 0 ? "tabChild":""} onClick = {()=>{
                        this.changeIsShow(0)
                    }}>正在热映</span>
                    <span className = {this.state.isShow == 1 ? "tabChild":''} onClick = {()=>{
                        this.changeIsShow(1)
                    }}>即将上映</span>
                </div> 
                {
                    this.state.isShow==0?<Now/>:<Will/>
                }
            </div>
          
        )
    }
}
export default Tab;