import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, { Component } from 'react';

class Homescreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={require("../assets/poolhome.jpg")} />
                </View> 
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>PoolTracker</Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button style = {styles.button} title='Log In'/>
                    <Button style = {styles.button} title='Sign Up'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    imageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    textWrapper:{
        justifyContent: 'center',
        marginTop: 60,
    },
    title: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white',
        borderColor: 'white'
    },
    buttonWrapper: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    button: {
        fontSize: 40,
        color: 'white'
    }
})
export default Homescreen;