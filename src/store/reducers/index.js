import {
    combineReducers
} from "redux"
import nowFilmReducer from "./nowFilmList"
import willFilmReducer from "./willFilmList"
export default combineReducers({
    nowFilm:nowFilmReducer,
    willFilm:willFilmReducer
})