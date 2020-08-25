// we import actions with our payload
//Action function to control the payload, payload is the key

import {ADD_FOOD,DELETE_FOOD} from './types';


export const addFood = (food) => (              //function 
 {                           
                    type: ADD_FOOD,             // type object, Action
                    data: food


}
);


export const deleteFood = (key) => (
    {
                    type: DELETE_FOOD,
                    key: key

    }
);