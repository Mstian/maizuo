import React from "react"
import {
    connect
} from "react-redux"
import {bindActionCreators} from "redux"
import willFilmListAction from "../../store/actionCreator/nowFilmListAction"
class Will extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.willFilmList.map((v)=>{
                        return (
                            <div key={v.id} className="main">
                                <ul>
                                    <li className="clearfix">
                                        <div className="pic">
                                            <img src={v.image} alt=""/>
                                        </div>
                                        <div className="intro">
                                            <p className="title">{v.title}</p>
                                            <p className="brand"><span className="position">{v.subTitle}</span><span className="city"></span><span className="salary">{v.action}</span></p>
                                            <p className="time">{v.score}</p>
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
        this.props.getWillFilmList();
    }
}
function mapStateToProps(state){
    return {
        willFilmList:state.willFilm.willFilmList,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(willFilmListAction,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Will);