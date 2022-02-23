import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';

const dog = require('../../assets/chowchow.jpeg');
const background = require('../../assets/galaxy.gif');
const WelcomeScreen = (props) =>{
	return(
	 <View>	
	 		<Image style={styles.gif} source={background}/>
	 		<Image style={styles.image} source={dog}/>
			<Text style ={styles.textStyle}>The Fluff Battle!</Text>
			
			<TouchableOpacity 
  				onPress={function(){props.navigation.navigate("HW")}}>
  				<Text style ={styles.button}>BEGIN THE GAME</Text>				
  			</TouchableOpacity>
			
	</View>
	);
}
const styles = StyleSheet.create({

	textStyle: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'red',
    position: 'absolute'

  },
  image: {
		width: 400,
		height: 400,
		top: 80,
		margin: 15,
		position: 'absolute'
	},
gif: {
		width: 450,
		height:850,
		alignSelf: 'center',
		
	},
button: {
    fontSize: 30,
    color: 'blue',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 250

  },
});

export default WelcomeScreen;