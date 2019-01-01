import initState from '../state/nowFilmList'
export default (state = initState,action)=>{
    switch (action.type){
        case "ADD_FILMLIST":
        state.nowFilmList = action.payload.nowFilmList
    }
    return {...state};
}