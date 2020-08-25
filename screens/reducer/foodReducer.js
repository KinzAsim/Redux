import {ADD_FOOD, DELETE_FOOD} from '../actions/types';


const initialState = {
    foodList: []                                 //foodform state
}


const foodReducer = (state = initialState, action) => {
         switch (action.type){                                        //different action types 
             case ADD_FOOD:
                 return {
                     ...state,
                     foodList: state.foodList.concat({
                        key: Math.random(),
                        name: action.data
                     })
                 }
             case DELETE_FOOD:
                 return {
                     ...state,
                     foodList: state.foodList.filter((item)=> item.key !== action.key)
                 };
             default:
                 return state;        
         }                                                   
}


export default foodReducer;