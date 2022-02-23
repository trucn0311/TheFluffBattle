import React from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
	console.log(props.navigation);
	
  return <View>
  	<Text style={styles.text}>HomeScreen</Text>
  	<Button
  		onPress={function(){props.navigation.navigate("Components")}} 
  		title={"ComponentsScreen"}
  	/>
  	<Button
  		onPress={function(){props.navigation.navigate("List")}} 
  		title={"List Screen"}
  	/>

  	<Button 
  		onPress={function(){props.navigation.navigate("Image")}}
  		title={"Image Screen"}
  	/>

  	<Button 
  		onPress={function(){props.navigation.navigate("Counter")}}
  		title={"Counter Screen"}
  	/>
  	<Button 
  		onPress={function(){props.navigation.navigate("Color")}}
  		title={"Color Screen"}
  	/>
  	<Button 
  		onPress={function(){props.navigation.navigate("Square")}}
  		title={"Square Screen"}
  	/>
  	<Button 
  		onPress={function(){props.navigation.navigate("Text")}}
  		title={"Text Screen"}
  	/>

  	<Button 
  		onPress={function(){props.navigation.navigate("Box")}}
  		title={"Box Screen"}
  	/>
  	<Button 
  		onPress={function(){props.navigation.navigate("Welcome")}}
  		title={"Home work 2"}
  	/>
  	</View>
        
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
