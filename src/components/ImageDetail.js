import React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

const ImageDetail = (props)=>{
	console.log(props);
	return (
		<View>
			<Image style={styles.image} source={props.imageSource}/>
				<Text>{props.title}</Text>
		</View>
	);

}

const styles = StyleSheet.create({
	image: {
		width: 200,
		height: 200
	}
});

export default ImageDetail