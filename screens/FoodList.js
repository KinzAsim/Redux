import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { deleteFood } from './actions/food';


class FoodList extends React.Component {

    static navigationOptions = {
        title: 'Food List',
        headerStyle: {
            backgroundColor: 'green',
        },
    };

   

    render(){
      
        return(
            <FlatList style ={ StyleSheet.listContainer}
            data={this.props.foods}    
            
           // data={[{title: 'Food List', key:'item'}]}                     //array
            keyExtractor={(item, index) => item.key.toString()}
            renderItem = {
                (data) =>
                <ListItem
                title={data.item.name}
                bottomDivider
                rightIcon= {
                <Icon
                name="delete"
                size={36}
                color="#000"
                onPress={()=>Alert.alert(
                    '',
                    'alertMessage',
                    [
                        {
                            text: "Cancel",
                            onPress:()=> console.log("Cancel Pressed")
                        },
                        {
                            text: "OK",
                            onPress: () => this.props.delete(data.item.key)
                        }
                    ],
                    { cancelable: false}
                )}/>
                    }
                  />
                }
            />           
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'grey',
        padding: 16
    },

    listText: {
        fontSize: 30
    },
});

const mapStateToProps = (state) => {                                             //this maps to your state
      return {
          foods: state.foodReducer.foodList
      }

}

const mapDispatchToProps = (dispatch) => {
       return {
           delete: (key) => dispatch(deleteFood(key))
       }

}


export default connect (mapStateToProps,mapDispatchToProps)(FoodList);