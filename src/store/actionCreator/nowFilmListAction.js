import axios from "axios"
export default {
    getNowFilmList(){
        return (dispatch,getState)=>{
            axios.get("./data/data.json",{
                start:1,
                count:10,
            }).then(({data})=>{
                var json = data.subjects;
                dispatch({
                    type:"ADD_FILMLIST",
                    payload:{
                        nowFilmList:json
                    }
                })
            })
        }
    },
    getWillFilmList(){
        return (dispatch,getState)=>{
            axios.get("./data/willcome.json").then(({data})=>{
                dispatch({
                    type:"ADD_WILLLIST",
                    payload:{
                        willFilmList:data
                    }
                })
            })
        }
    }
}