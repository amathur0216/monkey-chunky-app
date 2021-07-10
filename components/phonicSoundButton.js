import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import {Audio} from 'expo-av';

class PhonicSoundButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pressButtonIndex: '', 
    }
  }
playSound = async soundChunk =>{
      console.log(soundChunk);
var soundLink = 
'https://s3-whitehatjrcontent.whjr.online/phones/' +
soundChunk +
'.mp3';
await Audio.Sound.createAsync(
  {
    uri: soundLink,
  },
  {shouldPlay: true}
);
};
render(){
  return(
 <TouchableOpacity
        style={this.props.buttonIndex === this.state.pressButtonIndex
        ?[styles.chunkButton, {backgroundColor: "green"}]
        : [styles.chunkButton, {backgroundColor: "red"}]
        }
        onPress={() => {
          console.log("buttonIndex". this.state.pressButtonIndex)
          this.setState({
            pressButtonIndex: this.props.buttonIndex
          })
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={this.props.buttonIndex === this.state.pressButtonIndex
        ?[styles.displayText, {color: "red"}]
        : [styles.displayText, {color: "green"}]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
   displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#6e9683'
  }
}) 
export default PhonicSoundButton;

