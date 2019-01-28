import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

class NameForm extends Component {

    constructor(props) {
    super(props);
        this.state = {
          nameInput:false,
          name:"",
        }
      }

    onPress = event => {
      const {name} = this.state;

      if(name==""){
        //alert('Please enter a name.');
        this.setState({Error: 'Please enter a name.'});
      } else if(!name.match(/^[a-zA-Z]+$/)) {
        this.setState({Error: 'Only letters!'});
      }
      else {
        this.setState({name});
        this.setState({nameInput:true})
      }
    };

    render() {
      if(this.state.nameInput) {

       return (
            <View style={styles.container}>
              <Text style={styles.greeting}>
                {"Hello, " + this.state.name}
              </Text>
            </View>
          );
          }else{
            return(
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                onChangeText={(name) => this.setState({name})}
               />
               <Text style={styles.error}>
               {this.state.Error}
               </Text>
               <TouchableOpacity style={styles.submit} onPress={this.onPress}>
                  <Text style={styles.sumbmitText}>Submit</Text>
               </TouchableOpacity>
            </View>
            );
          }
        }
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    color:"#24A7AD",
    fontSize: 25,
    textAlign: "center",
    margin: 20
  },
  input: {
    fontSize: 20,
    borderRadius:200,
    backgroundColor: "#AEE4E7",
    borderColor:"#fff",
    borderWidth: 2,
    padding: 2,
    color:"white",
    height: 50,
    width: 200,
    textAlign: "center"
  },
  submit: {
    backgroundColor: "#24A7AD",
    borderWidth: 0,
    borderRadius:7,
    padding: 10,
    margin:30,
    shadowOffset:{width:0,height:1},
    shadowColor:"#999",
    shadowRadius:5,
    shadowOpacity: 0.4,
  },
  sumbmitText: {
    fontSize:20,
    textAlign: 'center',
    color: "#fff",
  },
  error: {
    color:"red",
    textAlign:"center",
  }
});

export default NameForm;
