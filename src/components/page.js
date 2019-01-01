import React from "react"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from "react-router-dom"
import Home from "./home"
import My from "./my"
import Buy from "./buy"
import Threater from "./threater"
import "../style/page.css"
import Detail from "./detail/detail"
class Nav extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/Threater" component={Threater}></Route>
                        <Route path="/Buy" component={Buy}></Route>
                        <Route path="/My" component={My}></Route>
                        <Route path="/Detail" component = {Detail}></Route>
                        <nav>
                            <NavLink activeStyle={{color:"orange"}} exact to="/">
                                <i className="iconfont icon-74"></i>   
                                <span>首页</span>
                            </NavLink>
                            <NavLink activeStyle={{color:"orange"}} to="/Threater">
                                <i className="iconfont icon-yingyuana"></i>
                                <span>影院</span> 
                            </NavLink>
                            <NavLink activeStyle={{color:"orange"}} to="/Buy">
                                <i className="iconfont icon-tuangou"></i>
                                <span>拼单</span> 
                            </NavLink>
                            <NavLink activeStyle={{color:"orange"}} to="/My">
                                <i className="iconfont icon-wode"></i>
                                <span>我的</span>
                            </NavLink>
                        </nav>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Nav;