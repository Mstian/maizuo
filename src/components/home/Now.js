import React from "react"
import "../../style/FilmList.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {withRouter} from "react-router-dom"
import nowFilmListAction from "../../store/actionCreator/nowFilmListAction"
class Now extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render(){
        return (
            <div className="box">
                {
                    this.props.nowFilmList.map((v)=>{
                        return (
                            <div key={v.id} className="main" onClick={()=>{
                                this.props.history.push({pathname:"/Detail"});
                            }}>
                                <ul>
                                    <li className="clearfix">
                                        <div className="pic">
                                            <img 
                                            src={v.images.medium} alt=""/>
                                        </div>
                                        <div className="intro">
                                            <p className="title">{v.title}</p>
                                            <p className="brand">
                                                {
                                                    v.genres.map((info)=>{
                                                        return (
                                                            <span key={info} className="position">{info}-</span>
                                                        )
                                                    })
                                                }
                                                {
                                                    v.directors.map((item)=>{
                                                        return (
                                                            <span key={item} className="city">[{item.name}]</span>
                                                        )
                                                    })
                                                }
                                                <span className="salary">购票</span></p>
                                            <p className="time">{v.year}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getNowFilmList();
    }
}
function mapStateToProps(state){
    console.log(state);
    return {
        nowFilmList:state.nowFilm.nowFilmList,
    }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(nowFilmListAction,dispatch);
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Now))