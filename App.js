import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Button, Image,	StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, } from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './Details';
import MainScreen from './Main';
import FilterScreen from './Filter';
const Stack = createStackNavigator();
function GoToButton({ screenName }) {
  const navigation = useNavigation();
  return (
	<TouchableOpacity onPress = {() => navigation.navigate(screenName)}>
		<Image source= {require('./Filter.png')}
		/>
	</TouchableOpacity>
	
  );
}
//BUTONUL STELUTA APARE ON DACA LOCATIA ESTE DEJA ADAUGATA LA FAVORITE
//SCENARIU IN CARE APASAREA SA DUCE LA REMOVE FROM FAVORITES
//BUTONUL STELUTA APARE OFF DACA LOCATIA NU ESTE DEJA ADAUGATA LA FAVORITE
//SCENARIU IN CARE APASAREA SA DUCE LA ADD TO FAVORITES
//DACA VECTORUL FAVORITES e UNDEFINED ATUNCI AUTOMAT NICIO LOCATIE NU EXISTA LA FAVORITE
function hey(locatie_adaugata_la_fav,navigation,action){
	if(locatie_adaugata_la_fav !=""){
		navigation.navigate('MainScreen',{locatie_adaugata_la_fav,action});
	}
}
function HELP({favorite,locatie}){
	const navigation = useNavigation();
	if(favorite != undefined){
		let pos = favorite.indexOf(locatie);
		if(pos == -1){
			return(
				<TouchableOpacity onPress = {()=>{hey(locatie,navigation,"ADD")}}>
					<Image source= {require('./star-off.png')}/>
				</TouchableOpacity>
			)
		}
		else{
			return(
				<TouchableOpacity onPress = {()=>{hey(locatie,navigation,"REMOVE")}}>
					<Image source= {require('./star-on.png')}/>
				</TouchableOpacity>
			)
		}
	}
	else{
		return(
				<TouchableOpacity onPress = {()=>{hey(locatie,navigation,"ADD")}}>
					<Image source= {require('./star-off.png')}/>
				</TouchableOpacity>
			)
	}
}
export default class App extends React.Component {
  render(){
	  return (
		<NavigationContainer >
		  <Stack.Navigator initialRouteName='MainScreen'>
			<Stack.Screen 
				name = 'MainScreen'
				component={MainScreen}
				options = {() => ({
					
					headerRight: () => (
						<TouchableOpacity>
							<GoToButton screenName="FilterScreen" />
						</TouchableOpacity>
					),
					})
				}
			/>
			<Stack.Screen 
				name = 'DetailsScreen'
				component={DetailsScreen}
				options={({ route }) => ({ 
					title: route.params.name, 
					headerRight: () => (
					<>
					<TouchableOpacity style  = {styles.favorite}>
						<HELP favorite = {route.params.favorite} locatie = {route.params.locatie.name} />
					</TouchableOpacity>
					</>
				  ),
				})}
			/>
			<Stack.Screen
				name = 'FilterScreen'
				component= {FilterScreen}
			/>
		  </Stack.Navigator>
		</NavigationContainer>
	  );
  }
}
const styles = StyleSheet.create({
	favorite:{
	   flexDirection : 'row-reverse'
    },
});