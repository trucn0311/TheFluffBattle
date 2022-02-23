import React , {useReducer,useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image,ImageBackground} from 'react-native';


const image1 = require('../../assets/plus.jpeg');
const image2 = require('../../assets/minus.png');
const image4 = require('../../assets/cute.png');
const image5 = require('../../assets/attack.jpeg');
const image6= require('../../assets/magic.jpeg');
const image7 = require('../../assets/health.jpeg');
const dead = require('../../assets/chihuahua.jpeg');


const COUNTER_INCREMENT = 1;
const COUNTERB_INCREMENT= 10;

const STAT_SCREEN_STATE = 'characterCreation';
const COMBAT_SCREEN_STATE = 'fighting';

const reducer = (state, action)=>{
  switch(action.counterToChange){
//character creation
  case 'pStrength':
    return state.pStrength + action.amount <0 || state.mark <0
      ?state
      :{...state, pStrength: state.pStrength + action.amount};
  case 'pHealth':
    return state.pHealth+ action.amount <0 || state.mark <0
    ?state
    :{...state, pHealth: state.pHealth + action.amount};
  case 'pMagic':
    return state.pMagic + action.amount <0 || state.mark <0
    ? state
    :{...state, pMagic: state.pMagic + action.amount};
  case 'mark':
    return state.mark + action.amount <0 || state.mark + action.amount >15
    ? state
    :{...state, mark: state.mark + action.amount};

//combat screen
  case 'mHealth':
    return state.mHealth - action.amount <0 || state.mHealth + action.amount >100
    ? state
    :{...state, mHealth: state.mHealth + action.amount};
  case 'mMagic':
    return state.mMagic - action.amount <0 || state.mMagic - action.amount >5
    ? state
    :{...state, mMagic: state.mMagic + action.amount};

//combat log
  case 'log1':
    return {log1:action.log1};
  case 'log2':
    return {log2:action.log2};
  case 'log3':
    return {log3:action.log3};
  default:
    return state;
}

}


const HW2 = ()=>{



const[gameState, setGameState]= useState(STAT_SCREEN_STATE);


//reducer
const [state,dispatch]= useReducer(reducer,{pStrength:1, pHealth:10,pMagic: 1,mark: 15,
  mStrength:5, mHealth:80,mMagic:5});
  



const [text, setText] = useState("A giant fluffy ball runs toward you!");

const onPressHandler2 = event => setText("A few hits from the cat paws! You deal "+state.pStrength+ " points of damage" +"\n"+"\n"+ "The monster barks at you. Hurting you 3 points in damage");
const onPressHandler3 = event => setText("Nothing more refreshing than a good hair trim!The monster takes "+ 3*state.pStrength+ " points of its hairs in damage" +"\n"+ "\n" + "The monster bites you. Hurting you 4 points in damage");
const onPressHandler4 = event => setText("20 points of health to keep your sanity!"+ "\n"+"\n"+"The monster looks at your hamburger and drools. It does nothing...");


var pointLimit;
  if(state.mark > 0){
    pointLimit = <Text>{"\n"}Spend all your points to continue!</Text>}


var entrance;
  if(state.mark == 0){
    entrance = 
    <TouchableOpacity
        onPress={function(){
           setGameState(COMBAT_SCREEN_STATE)}}>
       <Text style ={styles.text}>Click to start the game</Text>
      </TouchableOpacity>}


var whatToDisplay; 

switch(gameState){
case COMBAT_SCREEN_STATE:

    whatToDisplay = 

    <View style ={styles.viewStyle}>
        <Text style ={styles.text1}>Monster Stats{"\n"}  Health: {state.mHealth} {"\n"}  Strength: {state.mStrength}  {"\n"}   Magic: {state.mMagic} </Text>     
        <Text style ={styles.text2}>Player Stats{"\n"}Health: {state.pHealth} {"\n"}Strength: {state.pStrength}{"\n"}Magic: {state.pMagic}</Text>
        
        
       <View>
          {state.mHealth > 0 ? 
          <Image style={styles.GameImage}  source={image4}/>
         :<Image style={styles.GameImage}  source={dead}/>}
        </View>


        <Text style ={styles.monsterName}>FLUFF BALL!</Text> 
        <Text style ={styles.text3}>{text}</Text>            
        <Text style ={styles.text4}>How do you defend yourself?</Text>  

        


        <View>
          {state.mHealth > 0 ? 

          <TouchableOpacity
         onPress={()=>{dispatch({counterToChange:"mHealth",amount:-1*state.pStrength}); 
          dispatch({counterToChange:"pHealth",amount:-3});}}
         onPressIn={onPressHandler2}>
        <Image style={styles.GameImage2}  source={image5}/>
        </TouchableOpacity>
        :<Text style ={styles.end}>Fluff ball is defeated!</Text>}
        </View>

        <View>
          {state.mHealth > 0 ? 

         <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"mHealth",amount:-3*state.pStrength});
        dispatch({counterToChange:"pMagic",amount:-2}); 
        dispatch({counterToChange:"pHealth",amount:-4});}}
        onPressIn={onPressHandler3}
        >
        <Image style={styles.GameImage3}  source={image6}/>
        </TouchableOpacity>
        :<Text></Text>}
        </View>

        <View>
          {state.mHealth > 0 ? 

         <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"pHealth",amount:20});
        dispatch({counterToChange:"pMagic",amount:-1}); }}
        onPressIn={onPressHandler4}>
        <Image style={styles.GameImage4}  source={image7}/>
        </TouchableOpacity>

        :<Text> </Text>}
        </View>


        

     </View>
     break; 







  case STAT_SCREEN_STATE:
    whatToDisplay = 
      <View style={styles.view}>
      
      <Text style ={styles.textStyle}>Grow In Power!</Text> 

      <Text style ={styles.textStyle1}>Current Strength: {state.pStrength}</Text>

      <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"pStrength",amount:COUNTER_INCREMENT}); }}
        onPressIn={()=>{dispatch({counterToChange:"mark",amount:-1*COUNTER_INCREMENT}); }}
        >
      <Image  style ={styles.ImageStyle1} source={image1}/>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"pStrength",amount: -1*COUNTER_INCREMENT});} }
        onPressIn={()=>{dispatch({counterToChange:"mark",amount:1*COUNTER_INCREMENT}); }}
        >
      <Image  style ={styles.ImageStyle2} source={image2}/>
      </TouchableOpacity>

      <Text style ={styles.textStyle2}>Current health: {state.pHealth} </Text>

      <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"pHealth",amount: COUNTERB_INCREMENT});}} 
        onPressIn={()=>{dispatch({counterToChange:"mark",amount:-1*COUNTER_INCREMENT}); }}
        >
      <Image  style ={styles.ImageStyle3} source={image1}/>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"pHealth",amount: -1*COUNTERB_INCREMENT});}}
        onPressIn={()=>{dispatch({counterToChange:"mark",amount:1*COUNTER_INCREMENT}); }}>
      <Image  style ={styles.ImageStyle4} source={image2}/>
      </TouchableOpacity>

      <Text style ={styles.textStyle3}>Current magic: {state.pMagic} </Text>

      <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"pMagic",amount: COUNTER_INCREMENT});}}
        onPressIn={()=>{dispatch({counterToChange:"mark",amount:-1*COUNTER_INCREMENT}); }}
         >
      <Image  style ={styles.ImageStyle5} source={image1}/>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{dispatch({counterToChange:"pMagic",amount: -1*COUNTER_INCREMENT});}}
        onPressIn={()=>{dispatch({counterToChange:"mark",amount:1*COUNTER_INCREMENT}); }}
        >
      <Image  style ={styles.ImageStyle6} source={image2}/>
      </TouchableOpacity>

      <Text style ={styles.textStyle4}>Points remaining: {state.mark} </Text>  

      <Text style ={styles.warning} >{pointLimit}</Text>  

      <Text style ={styles.button}>{entrance}</Text>      
  

  </View>
  break;

}




return whatToDisplay;



}



const styles = StyleSheet.create({

    view: {
    flexDirection: "column",
    backgroundColor: "lavender",
    height: 1000
   
  },


  textStyle: {
    fontSize: 50,
    color: 'green',
    alignSelf: 'center',
   
  },

  textStyle1: {
    fontSize: 18,
    top:40,
    alignSelf: 'center',
    right:15
 
    
  },

  textStyle2: {
    fontSize: 18,
    alignSelf: 'center',
    top: 140,
    right:10

   

  },

  textStyle3: {
    fontSize: 18,
    alignSelf: 'center',
    top: 250,
    right:10

  },

  textStyle4: {
    fontSize: 30,
    alignSelf: 'center',
    top: 350,   

  },

  ImageStyle1:{
    height:90,
    width:90,
    left: 20,
    position: 'absolute'

  },
  ImageStyle2:{
    height:90,
    width:90,
    right: 20,
    position: 'absolute',
    
  },
  ImageStyle3:{
    height:90,
    width:90,
    top:100,
    left: 20,
    position: 'absolute',

  },
  ImageStyle4:{
    height:90,
    width:90,
    top:100,
    right: 20,
    position: 'absolute',


  },
  ImageStyle5:{
    height:90,
    width:90,
    top:210,
    left: 20,
    position: 'absolute',

  },
  ImageStyle6:{
    height:90,
    width:90,
    top:210,
    right: 20,
    position: 'absolute',

  },
  button:{
    padding: 15,
    alignSelf: 'center',
    top: 400,  
    backgroundColor: 'orange' 
    

  },

  text:{
    fontSize: 19,
    left: 15,
    top:15

  },
  warning: {
    fontSize: 20,
    alignSelf: 'center',
    top: 360,   

  },
  viewStyle:{
    height: 1000,
    flexDirection: "column",
    backgroundColor: 'salmon'

  },
  text1:{
    color:'white',
    fontSize: 18,
    borderWidth: 3,
    borderColor: 'black',
    padding:20,
    borderColor:'black',
  },
  text2:{
    color:'white',
    fontSize: 18,
    padding: 20,
    paddingRight: 90,
    borderWidth: 3,
    borderColor: 'black',
    position: 'absolute',
    left: 220,
    borderColor:'black',
  },
  text3:{
    color:'white',
    fontSize: 18,
    borderWidth: 3,
    borderColor: 'black',
    height: 190,
    width:420,
    alignSelf: 'center',
    top: 40
    
  },
  text4:{
    color:'white',
    fontSize: 18,
    alignSelf: 'flex-start',
    padding: 40,
    
    
  },
  GameImage:{
    height: 250,
    width:300,
    alignSelf: 'center'
  },

  monsterName:{
    color:'white',
    fontSize: 30,
    alignSelf: 'center',
    top: 10
  },
  GameImage2:{
    height: 120,
    bottom:10,
    width:120,
    left: 10,
    borderWidth: 3,
    borderColor: 'black'
    
  },
  GameImage3:{
    height: 120,
    width:120,
    position: 'absolute',
    bottom:10,
    left: 150,
    borderWidth: 3,
    borderColor: 'black',

    
  },
  GameImage4:{
    height: 120,
    width:120,
    position: 'absolute',
    bottom:10,
    left: 290,
    borderWidth: 3,
    borderColor: 'black',
    
  },
end:{
    color:'white',
    fontSize: 40,
    alignSelf: 'center',
    bottom:20
    
  },
  
});

export default HW2;
