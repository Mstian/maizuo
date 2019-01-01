import initState from "../state/willFilmList"
export default (state = initState,action)=>{
    switch(action.type){
        case "ADD_WILLLIST":
        state.willFilmList = action.payload.willFilmList
    }
    return {...state};
}