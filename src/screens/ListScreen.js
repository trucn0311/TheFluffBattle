import React from "react";
import { Text, StyleSheet,View, FlatList } from "react-native";

const teacherList = [
{name: "Ben"},
{name: "Ted"},
{name: "Chris"},
{name: "Matt"},
{name: "James"},
];

const ListScreen = () => {
  return (
  	<FlatList 
  		keyExtractor = {(teacher) => {return teacher.name}}
  		data={teacherList} 
  		renderItem = {({item})=> {
  			return <Text>{item.name}</Text> 

  			} 
  		 }
  	/>
  	)
}

const styles = StyleSheet.create({
	TextStyle: {
    fontSize: 30
  }
});

export default ListScreen;