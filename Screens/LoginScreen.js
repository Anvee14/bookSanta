import React, { Component } from 'react';
import { StyleSheet, Text, View ,Modal, ScrollView, KeyboardAvoidingView, TouchableOpacity,TextInput} from 'react-native';
import db from '../config'

import * as firebase from 'firebase'
export default class LoginScreen extends Component{
    constructor(){
        super()
        this.state={
            email:"",
            pwd:"",
            isModalVisible:false,
            firstName:"",
            lastName:"",
            mobileNo:"",
            address:"",
            confirmPwd:""
        }
    }
    modalVisibility=()=>{
      return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}
        >
        <View>
          
          <ScrollView>

            <KeyboardAvoidingView>

        <TextInput 
        placeholder="First Name"
        onChangeText={(text)=>{
          this.setState({
            firstName:text
          })
        }}/>
        <TextInput 
        placeholder="Last Name"
        onChangeText={(text)=>{
          this.setState({
            lastName:text
          })
        }}/>
        <TextInput 
        placeholder="Mobile No."
        onChangeText={(text)=>{
          this.setState({
            mobileNo:text
          })
        }}/>
        <TextInput 
        placeholder="Address"
        onChangeText={(text)=>{
          this.setState({
            address:text
          })
        }}/>
        <TouchableOpacity
        style={styles.submitButton}
        onPress={()=>{
          this.signUp(this.state.email,this.state.pwd,this.state.confirmPwd)
          console.log("0")
        }}
        >
        <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.submitButton}
        onPress={this.setState({
        isModalVisible:false
        })}
        >
        <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>

        </ScrollView>

        </View>
        </Modal>
       
      )
    }
    loginEmail=async(email,pwd)=>{
        
      firebase.auth().signInWithEmailAndPassword(email,pwd).then(()=>{
          alert("succesfully logged in")
          this.props.navigation.navigate('RequestScreen')
      })

            .catch((error)=>{
              var errorCode = error.code 
              var errorMsg = error.message
              return alert(errorMsg)
              
            })
    
        
    }
    signUp=(email,pwd,confirmPwd)=>{
      if(pwd!==confirmPwd){
        alert("please confirm your password")
      }else{
        firebase.auth().createUserWithEmailAndPassword(email,pwd).then(()=>{
            alert("succesfully signed up")
        })
        .catch((error)=>{
            var errorCode = error.code 
            var errorMsg = error.message
            return alert(errorMsg)
            
          })
          db.collection("Users").add({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            mobileNo:this.state.mobileNo,
            address:this.state.address,
            userName:this.state.email
          })
        }
    }
  render(){
  return (
    <View style={styles.container}>
      <View>
        {this.modalVisibility()}
      </View>
       
           <TextInput
            style={styles.inputBox}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text)=>{
            this.setState({
                email:text
            })
            }}>
            </TextInput>

            <TextInput
            style={styles.inputBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text)=>{
            this.setState({
                 pwd:text
            })
            }}>
                </TextInput>

           <TouchableOpacity
        style={styles.submitButton}
        onPress={()=>{
          this.loginEmail(this.state.email,this.state.pwd)
          console.log("0")
        }}
        >
        <Text style={styles.buttonText}>Submit</Text>

        </TouchableOpacity>
        <TouchableOpacity
        style={styles.submitButton}
        onPress={()=>{
          this.signUp(this.state.email,this.state.pwd)
          console.log("0")
        }}
        >
        <Text style={styles.buttonText}>Submit</Text>

        </TouchableOpacity>
    
    </View>
  );
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
