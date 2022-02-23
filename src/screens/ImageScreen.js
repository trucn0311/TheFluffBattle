import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () =>{
	return (
		<View>
			<Text>Image Screen</Text>
			<ImageDetail title="Coffee" imageSource={require('../../assets/coffee.jpeg')}/>
			<ImageDetail title="Donuts" imageSource={require('../../assets/donut.jpeg')}/>
			<ImageDetail title="Sandwich" imageSource={require('../../assets/sandwich.jpeg')}/>
		</View>
	);
}
const styles = StyleSheet.create({});

export default ImageScreen