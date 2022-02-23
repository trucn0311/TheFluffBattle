import React from 'react';
import {Text, View, StyleSheet, Button,Image} from 'react-native';

const dog = require('../../assets/chowchow.jpeg');
const WelcomeScreen = (props) =>{
	return(
	 <View>
			<Text style ={styles.textStyle}>The Fluff Battle!</Text>
			<Image style={styles.image} source={dog}/>

			<Button 
  				onPress={function(){props.navigation.navigate("HW")}}
  				title={"BEGIN THE GAME"}
  				
  			/>
			
	</View>
	);
}
const styles = StyleSheet.create({

	textStyle: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'red',

  },
  image: {
		width: 400,
		height: 400,
		margin: 15,
	}
});

export default WelcomeScreen;