import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CounterScreen = ()=>{

const [counter,setCounter] = useState(0);

	console.log(counter);
	return <View>
		<Button title="Increase" onPress={function(){
			//counter ++;
			setCounter(counter + 1);
			console.log(counter);
		}}  />
		<Button title="Decrease" onPress={function(){ 
			//counter --;
			setCounter(counter -1);
			console.log(counter);
		}} />
		<Text>Current Count:{counter}</Text>
	</View>
}
const style = StyleSheet.create({});

export default CounterScreen;