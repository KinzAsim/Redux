import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FoodForm from '../../screens/FoodForm';
import FoodList from '../../screens/FoodList';

const App_Stack = createStackNavigator({ 
    Home: {
        screen: FoodForm
    },
    FoodList: {
        screen: FoodList
        
    },

});
export default createAppContainer(
    App_Stack
);
