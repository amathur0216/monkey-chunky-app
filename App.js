import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import AppHeader from './components/AppHeader';
import db from './localDb';
import PhonicSoundButton from './components/phonicSoundButton';


console.log(db["the"].chunks)
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],

    }
  }
  render() {
    return (
      <View style={styles.container}>
            <AppHeader/>
            <Image style = {styles.imageIcon}
            source = {{uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',}}
            />
<TextInput style={styles.inputBox} 
onChangeText={text => { this.setState({ text: text }); }} value={this.state.text}
 />     
  <View>
          {this.state.chunks.map((item, index) => {
            return(
              <PhonicSoundButton
              wordChunk = {this.state.chunks[index]}
              soundChunk = {this.state.phonicSounds[index]}
              buttonIndex = {index}
              />
            )
          })}
          </View>
         <TouchableOpacity 
            style={[styles.button,{backgroundColor:"#6e9683"}]} 
            onPress = {()=> {
              
              console.log("state", db[word]);
              var word = this.state.text.toLowerCase().trim();
              db[word]?(
              this.setState({
                chunks: db[word].chunks
              }),
              this.setState({
                phonicSounds: db[word].phones
              })):
              Alert.alert("This word is not in the database.");
            }}>
            <Text style={styles.buttonText}>GO!</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b9bc',
  },
 button: {
    marginTop: 150,
    margin: 70,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  imageIcon: {
    height: 150,
    width: 150,
    marginLeft: 90,
  },
  inputBox: {
    marginTop: 100,
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
  },
  chunkButton: {
    marginTop: 50,
    height: 40,
    width: 200,
    borderRadius: 15,
    alignSelf: 'center',
  }, 
  displayText: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
});
