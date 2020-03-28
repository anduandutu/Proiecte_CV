import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Button, Image,	StyleSheet, ActivityIndicator, FlatList, TouchableOpacity,SectionList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class DetailsScreen extends React.Component {

	static navigationOptions = {
		title: 'DetailsScreen',
		
	}

	render(){
		return(
		
			<View style={styles.container}>
			
				<SectionList
					sections = {[
						{title: 'Location', data: [this.props.route.params.locatie.name]},
						{title: 'Country', data: [this.props.route.params.locatie.country]},
						{title: 'Longitutde', data: [this.props.route.params.locatie.long]},
						{title: 'Latitude', data: [this.props.route.params.locatie.lat]},
						{title: 'Wind Probability', data: [this.props.route.params.locatie.probability +' %']},
						{title: 'When to go', data: [this.props.route.params.locatie.month]},
					]}
				renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
				renderSectionHeader={({section}) => 
					<Text style={styles.sectionHeader}>
						{section.title}
					</Text>
				}
				keyExtractor={(item, index) => index}
				/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})