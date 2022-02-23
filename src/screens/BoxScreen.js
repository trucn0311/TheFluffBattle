import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const BoxScreen = ()=>{
	return <View style ={styles.viewStyle}>
		<Text style ={styles.textOneStyle}>Child 1</Text>
		<Text style ={styles.textTwoStyle}>Child 2</Text>
		<Text style ={styles.textThreeStyle}>Child 3</Text>
			</View>

}
const styles = StyleSheet.create({
	viewStyle:{
		
		flexDirection: "row"
		//justifyContent: "flex-start",
		//justifyContent: "flex-end",
		//justifyContent: "space-between",
		//justifyContent: "space-around"
		//justifyContent: "center",
		//flexDirection: "row",
		//alignItems: "center"
		//height: 200
	},
	textOneStyle:{
		height: 100,
		borderColor: 'red',
		flex:2,

		//flex: 4
		//marginVertical: 20,
		//marginHorizontal: 20
		//margin: 20,
		//padding: 20
	},
	textTwoStyle:{
		height: 100,
		borderColor: 'red',
		position: 'absolute'
		//alignSelf: 'flex-start'
		//alignSelf: 'flex-end'
		//alignSelf: 'center'
		//alignSelf: 'stretch'
		//position: 'absolute',
		
	},
	textThreeStyle:{
		height: 100,
		borderColor: 'red',
		flex: 2
	}





});
export default BoxScreen;