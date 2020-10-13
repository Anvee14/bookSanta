import React, { Component } from 'react';
import { StyleSheet, Text, View ,Modal, ScrollView, KeyboardAvoidingView, TouchableOpacity,TextInput} from 'react-native';
import db from '../config'
import * as firebase from 'firebase'
export default class RequestScreen extends Component{
    render(){
    return(
        <View >
          <Text style={StyleSheet.container}>Request</Text>
        </View>
    )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(142, 188, 238)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      fontSize:'large'
    },
    buttonText: {
      fontWeight: 'bolder',
      fontSize: 'large',
  
    },
    inputBox: {
      width: 200,
      height: 30,
      marginTop: 15,
      borderWidth: 1,
      fontWeight: 'bold',
      fontSize: 'large',
      borderWidth: 'medium',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      borderRadius: 2,
      borderColor: 'black',
      marginLeft: 'center',
      marginRight: 'center',
      textAlign: 'center',
      fontStyle:'italic',
    },  
    submitButton:{
      display: 'block',
      width: 150,
      backgroundcolor: 'lightblue',
      borderRadius: 25,
      borderColor: 'black',
      borderWidth: 'thick',
      fontWeight: 'bold',
      fontSize: 'larger',
      marginLeft: 'center',
      marginRight: 'center',
      textAlign: 'center',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
      lineHeight:40,
      marginTop:30,
    },
});

