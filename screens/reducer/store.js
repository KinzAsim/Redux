import { createStore, combineReducers } from 'redux';
import foodReducer from './../reducer/foodReducer';


//if you have multiples reducer you need to have this const function

const rootReducer = combineReducers ({
    foodReducer: foodReducer
})
                                                                               
                                                                                  // this create your store for your app
const configureStore = () => createStore(rootReducer);                           //return createstore and pass the reducer to it

export default configureStore;