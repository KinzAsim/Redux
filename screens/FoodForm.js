import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { addFood } from './actions/food';


class FoodForm extends React.Component {
            
            static navigationOption ={
                title: 'Home',
                headerShown: 'false',
                headerStyle: {
                backgroundColor: 'blue',
                    },
                    };
                    
            state = {
                food: null                    //list of food 
                    }

          
            render(){
            

            return(
                <View style={styles.container}>
                    <Text style={styles.title}>Food</Text>
                    <TextInput
                    value={this.state.food}
                    placeholder='Name'
                    style={styles.foodInput}
                    onChangeText={(food)=> this.setState({ food })}
                    />
                    <Button
                    title='Submit'
                    color='black'
                    onPress={()=> this.props.add(this.state.food)}/>
                  

                   <View style={styles.box}>
                   <Button
                     title='Go to FoodList'
                     color='black'
                     onPress={()=> this.props.navigation.navigate('FoodList')}>
                     
                      
                    </Button>
                   </View>
                </View>
            );
            }
            };

           


const styles = StyleSheet.create({
           container: {
               flex: 1,
               marginTop:200,
               alignItems:'center'
           },
           
           title: {
               fontSize: 64,
               marginBottom: 48
           },

           foodInput: {
               fontSize: 32,
               marginBottom: 32,
               borderWidth: 1,
               padding: 8,
               width: '80%',
               borderRadius: 10,
           },
           
           box: {
               marginTop:50,
           }
});
const mapStateToProps = (state) => {                                             //this maps to your state
    return {
        foods: state.foodReducer.foodList
    }

}
const mapDispatchToProps = (dispatch) => {                                             //this maps to your state
    return {
        add: (food)=>dispatch(addFood(food))
    }

}



export default connect (mapStateToProps,mapDispatchToProps)(FoodForm);