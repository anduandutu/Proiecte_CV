import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity,StyleSheet } from 'react-native';
export default class FilterScreen extends Component {
	static navigationOptions = {
		title: 'FilterScreen',
    }
	
	filter(criteriu1,criteriu2){
		this.props.navigation.navigate('MainScreen',{criteriu1,criteriu2});
	}
	constructor(props) {
		super(props);
		this.state = {
		 crit_country: '',
		 crit_wind_probability: ''
		};
	}
	handle_criteriu1 = (text) => {
      this.setState({ crit_country: text })
    }
    handle_criteriu2 = (text) => {
      this.setState({ crit_wind_probability: text })
    }
  
    render() {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Country "
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handle_criteriu1}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Wind Probability"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handle_criteriu2}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.filter(this.state.crit_country,this.state.crit_wind_probability)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </View>
		)
	}
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
