import * as redux from "redux"
import {SET_USERS} from './action'

const initialstate={

    data: [],
};

const userReducer = (state=initialstate,action)=>{
    switch(action.type){
        case SET_USERS:{
            console.log("Data Fetched ::"+action.value);
            return{...state, data: action.value}
        }
        default:
            return initialstate;
    }
};
export const rootReducer=redux.combineReducers({
    users:userReducer,
});