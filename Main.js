
import * as React from 'react';
import { View, 
		Text, 
		Button, 
		Image,	
		StyleSheet, 
		ActivityIndicator, 
		FlatList, 
		TouchableOpacity,
		Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Swipeable from 'react-native-gesture-handler/Swipeable';
import { images } from './images';
class MainScreen extends React.Component {

	static navigationOptions = ({navigation}) =>{
			
	}
 	//metoda de redirect catre screen-ul de Detalii locatie
	constructor(props) {
	     super(props);
		 //definim state-ul care va fi la inceputul aplicatiei initializat astfel ca 
		 this.state = {
		   loading: true, // datele se incarca 
		   dataSource:[], // si sursa de date inca nu este populata
		   favorites: [], //pentru lucrul cu favorite
		   addedToFavorites : false,//pentru conditioned rendering in cazul stelutelor
		   selectedLocation : '', //variabila pentru memorarea locatiei curente selectate pentru detalii
		 };
	}
	//functie de filtrare a datelor din dataSource in functie de parametrii primiti din FilterScreen
	filterByProperty(array,criteriu1,criteriu2){
		if(criteriu1 !=undefined){
			const result_filter_by_country = array.filter(item => item["country"] == criteriu1);
			if(criteriu2 !=undefined){
				const result_filtered_by_country_and_wind_prob = result_filter_by_country.filter(item =>item["probability"] == criteriu2);
					this.setState({dataSource:result_filtered_by_country_and_wind_prob});
			}
			else{
				this.setState({dataSource:result_filter_by_country});
			}
		}
		else if(criteriu2 != undefined){
			const result_filter_by_wind = array.filter(item => item["probability"] == criteriu2);
			if(criteriu1 !=undefined){
				const result_filtered_by_country_and_wind_prob = result_filter_by_wind.filter(item =>item["country"] == criteriu1);
					this.setState({dataSource:result_filtered_by_country_and_wind_prob});
			}
			else{
				this.setState({dataSource:result_filter_by_wind});
			}
		}
		else{
			alert("We will do no filtering");
		}

	}
	//Preiau in format JSON datele de la sursa oferita 
	componentDidMount(){
		fetch("https://5ddbb358041ac10014de140b.mockapi.io/spot")
		.then(response => response.json())
		.then((responseJson)=> {
			 this.setState({
			   loading: false, // in momentul in care au fost preluate se considera ca nu mai e nevoie de incarcare
			   dataSource: responseJson, // iar datele au fost preluate complet
			 })
		})
		.catch(error=>console.log(error)) //ne asiguram ca daca cumva avem erori de pe parcursul preluarii datelor, ele vor fi tratate
	}
	//Separatorul dintre cadrele in care sunt plasate informatiile despre locatiile de kitesurfinng
	FlatListItemSeparator = () => {
		return (
		  //si ii definim un anumit style
		  <View style={{
			 height: .5,
			 width:"100%",
			 backgroundColor:"rgba(0,0,0,0.5)",
		}}
		/>
		);
	}
	//metode pentru adaugarea si stergerea locatiilor de la favorite
	addtoFavorites = locatie => {
		this.setState({ addedToFavorites : true });
		let pos = this.state.favorites.indexOf(locatie);
		if(pos == -1){
			this.setState({ favorites: this.state.favorites.concat(locatie) });
			this.setState({ selectedLocation: locatie });
			alert('Location ' + locatie+ ' added to favorites');
		}
		else{
			alert('Location already exists at favorites');
		}
	}
	removeFromFavorites(locatie){
		//setam addedToFavorites pe false
		this.setState({ addedToFavorites : false });
		//alertam utilizatorul corespunzator
		let pos = this.state.favorites.indexOf(locatie);
		if(pos == -1){
			alert("Location does not exist in favorites list");
		}
		else{
			alert('Removing ' + locatie+ ' from favorites');
			this.setState({favorites: this.state.favorites.filter(word => word != locatie)});
		}
	}
	onPress(locatie,favorite) {
		this.props.navigation.navigate('DetailsScreen',{locatie:locatie,favorite: favorite});
	}
	//functia pentru conditional rendering
	imagesrc(locatie){
		if(this.state.addedToFavorites == true){
			return this.state.favorites.indexOf(locatie) != -1 ? images.addedToFavorites.uri : images.removedOrNotAdded.uri; 
		}
		else{
			return this.state.favorites.indexOf(locatie) == -1 ? images.removedOrNotAdded.uri : images.addedToFavorites.uri;
		}
	}
	renderItem=(data)=>
	<>
	<TouchableOpacity style={styles.list} >
		<Swipeable renderLeftActions = {()=> this.LeftActions(data.item.name)} renderRightActions = {()=>this.RightActions(data.item.name)} >
			<Text style={styles.list} onPress={()=>{this.onPress(data.item,this.state.favorites)}}> 
				{data.item.name}{"\n"}{data.item.country}
			</Text>
		</Swipeable>
	</TouchableOpacity>
	<Image style = {styles.favorite} source= {this.imagesrc(data.item.name)}/>
	</>
	//pentru afisarea butonului de Remove de la favorite a locatiei
	LeftActions(locatie) {
		
		return(
			<View style = {styles.LeftActions}>
				<TouchableOpacity style={styles.buton} onPress = {()=>{this.removeFromFavorites(locatie)}}>
					<Text>Remove</Text>
				</TouchableOpacity>
			</View>
		)
	};
	//Pentru a afisa butonul de Add la favorite a locatiei
	RightActions(locatie) {		
		return(
			<View style = {styles.RightActions}>
				<TouchableOpacity style={styles.buton} onPress = {()=>{this.addtoFavorites(locatie)}}>
					<Text>Add</Text>
				</TouchableOpacity>
			</View>
		)
	};
	refreshrender(locatie_noua,actiune_locatie,criteriu1,criteriu2){
			if(criteriu1!=undefined||criteriu2!=undefined){
				this.filterByProperty(this.state.dataSource,criteriu1,criteriu2);
			}
			else{
				alert("No filter");
			}
			if(locatie_noua != undefined){
				if(actiune_locatie == "ADD"){
					this.addtoFavorites(locatie_noua);
				}
				else{
					this.removeFromFavorites(locatie_noua);
				}
			}
			else{
				alert("No location to add to favorites");
			}
	}
	refresh(){
		//Se transmit cele 4 variabile primite pe route 
		//una pentru locatii ce trebuie adaugate sau nu la favorite 
		//una ce specifica operatie de ADD/REMOVE FROM Favorites
		//una pentru filtrarea datelor in functie de criteriu1 = country
		//una pentru filtrarea datelor in functie de criteriu2 = windProbability
		if(this.props.route.params.locatie_adaugata_la_fav != undefined){
			var locatie_noua = this.props.route.params.locatie_adaugata_la_fav;
		}
		if(this.props.route.params.action != undefined){
			var action = this.props.route.params.action;
		}
		if(this.props.route.params.criteriu1 != undefined){
			var country_filter = this.props.route.params.criteriu1;
		}
		if(this.props.route.params.criteriu2 != undefined){
			var windProbability_Filter = this.props.route.params.criteriu2;
		}
		this.refreshrender(locatie_noua,action,country_filter,windProbability_Filter)
	}
	render(){
		//daca cumva starea aplicatiei este de incarcare a datelor preluate din format JSON 
		//afisam un loading screen	
		if(this.state.loading){
			return( 
				<View style={styles.loader}> 
					<ActivityIndicator size="large" color="#0c9"/>
				</View>
			)
		}
		return(
			<View style={styles.container}>	
				 <Button title = "Apply All Changes" onPress = {() => {this.refresh()}}/>
				 <FlatList
					data= {this.state.dataSource}
					ItemSeparatorComponent = {this.FlatListItemSeparator}
					renderItem= {item=> this.renderItem(item)}
					keyExtractor= {item=>item.id.toString()}
				 />
			</View>
		)
	}
}
//style 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff",
	flexDirection : 'row',
	alignSelf:'stretch',
   },
   favorite:{
	   flexDirection : 'row',
	   position: 'absolute',
	   margin: 20,
	   alignSelf:'flex-end',
	   justifyContent:'center'
   },
	LeftActions:{
		backgroundColor: "#a31731",
		justifyContent: 'center',
		flex : 1,
	},
	actionText:{
		color: '#fff',
		fontWeight: '600',
		paddingVertical: 4,
		paddingBottom : 4,
		paddingLeft: 4,
		paddingRight: 4,
	},
	RightActions: {
		backgroundColor: "#42bd56",
		justifyContent: 'center',
		alignItems: 'flex-end',
		flex : 1,
	},
	buton:{
		alignSelf:'stretch',
	}
}
);
export default MainScreen;