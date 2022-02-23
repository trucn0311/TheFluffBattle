import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = ()=>{

	const [name,setName]= useState("");

	var lengthWarning;
	if(name.length <5){
		lengthWarning = <Text>Extend your name!</Text>
	}
	return <View>
		<Text>Enter Password:</Text>
		<TextInput 
			style={style.input}
			autoCapitalize="none"
			autoCorrect={false}
			value={name}
			onChangeText={(newText) => {setName(newText);}}
		/>
		{lengthWarning}
	</View>

}

const style = StyleSheet.create({
	input:{
		margin:20,
		borderColor: "black",
		borderWidth: 1
	}
});

export default TextScreen;