import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native'

export default class Lottie extends Component{
    render(){
        return(
            <LottieView 
            source={require("../assets/4887-book.json")}
            style={{width:150,height:100}}
            autoPlay loop
            />
        )

    }
}
