
import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native'; 

export default function Header() {
    return (
        <View style={styles.headerStyle}>
            <View>
                <Text> Main Header</Text>
            </View>
            <Text style={{ color: '#fff' }}>...Header or Body</Text>
        </View>
    )
    
}

var styles = StyleSheet.create({
    headerStyle:{
        flex: 1, 
        backgroundColor: '#AED6F1', 
        alignItems: 'stretch', 
        // justifyContent: 'center', 
        alignContent:'stretch',
        alignSelf:'stretch'
    }
});

