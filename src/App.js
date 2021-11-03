import React, {Component} from 'react';  
import {Platform, StyleSheet, ScrollView, Text, View} from 'react-native';  
import Footer from './components/footer';
import Header from './components/header';
  
const instructions = Platform.select({  
  ios: 'This messages only appear on ios device:'+'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',  
  android:  
    'This messages only appear on android device: '+'Double tap R on your keyboard to reload,\n' +  
    'Shake or press menu button for dev menu',  
});  
  
export default class App extends Component{  
  render() {  
    return (  
      <View style={styles.container}>  
        <Header/>
        <Text style={styles.welcome}>Welcome to React Native!</Text>  
        <Text style={styles.instructions}>{instructions}</Text> 
        <Footer/>
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1, 
    flexDirection:'column', 
    justifyContent: 'center',  
    alignItems: 'stretch',  
    backgroundColor: '#fff',  
  },  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  },  
  instructions: {  
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5,  
  },  
}); 