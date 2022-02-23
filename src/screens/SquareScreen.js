import React, {useReducer} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';
const COLOR_INCREMENT = 20;
const reducer = (state, action)=>{
	//state looks like: {red: number, green: number, blue: number}
	//action looks like: {colorToChange: "red"||"green"||"blue",amount: 20||-20}

switch(action.colorToChange){
	case 'red':
	//not going to work: state.red = state.red +action.amount
		return state.red + action.amount <0 || state.red +action.amount>255
			?state
			:{...state, red: state.red + action.amount};
	case 'green':
		return state.green + action.amount <0 || state.green +action.amount>255
		?state
		:{...state, green: state.green + action.amount};
	case 'blue':
		return state.blue + action.amount <0 || state.blue +action.amount>255
		? state
		:{...state, blue: state.blue + action.amount};
	default:
		return state;
}


}

const SquareScreen = () => {

	const [state,dispatch]= useReducer(reducer,{red:0, green:0,blue: 0});
	const {red,green,blue}=state;
	//const [red,setRed]=useState(0);
	//const [green,setGreen]=useState(0);
	//const [blue,setBlue]=useState(0);

	
		//if (color ==='red'){
		//red + change < 0 || red + change > 255 ? null: setRed(red+change);
		//}

		//if (color ==='green'){
			//green + change < 0 || green + change > 255 ? null: setGreen(green + change);
		//}
		//if (color ==='blue'){
			//blue + change < 0 || blue + change > 255 ? null: setBlue(blue + change);
		//}
	return <View>
		<ColorCounter color="Red" 
		  onIncrease={()=>{dispatch({colorToChange:"red",amount: COLOR_INCREMENT}); }}
		  onDecrease={()=>{dispatch({colorToChange:"red",amount: -1* COLOR_INCREMENT}); }}
		 />
		<ColorCounter color="Green"
			onIncrease={()=>{dispatch({colorToChange:"green",amount: COLOR_INCREMENT});} }
		   onDecrease={()=>{dispatch({colorToChange:"green",amount: -1* COLOR_INCREMENT});} }
		   />
		<ColorCounter color="Blue"
			onIncrease={()=>{dispatch({colorToChange:"blue",amount: COLOR_INCREMENT});} }
		   onDecrease={()=>{dispatch({colorToChange:"blue",amount: -1*COLOR_INCREMENT});} }
		   />

		<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
	</View>	
}
const style= StyleSheet.create({})
export default SquareScreen;