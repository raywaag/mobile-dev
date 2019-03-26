import React from "react";
import {View,ScrollView, Text, StyleSheet} from 'react-native';
import Button from "./Button";

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  }

  constructor(props) {
    super(props);
    this.state = { 
      fahrenheit: true,
      temp: '',
    };
  }


  setMetric(fahrenheit) {
    this.setState({ fahrenheit });
  }

  converter = (fahrenheit) => {
    const intTemperature = parseInt(this.state.temp, 10);
    if (fahrenheit) {
      return String(Math.round(((intTemperature * 9) / 5) - 459.67));
    }
    return String(Math.round(intTemperature - 273.15));
  };

  checkMultiPermissions = async() => {
    const { Permissions, FileSystem } = Expo;
    console.log(FileSystem.documentDirectory);
    let { status, expires, permissions } = await Permissions.getAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      console.log('Hey! You heve not enabled selected permissions');
      const { newStatus, expires, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      status = newStatus;
    }
    if(status === 'granted') {
        console.log("Granted!");
        let result = await Expo.ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
        })

        console.log(result);
          if (!result.cancelled) {
            console.log(this);
            console.log("Accepted!");
            this.setState({ newPostImage:result.uri, createPostModalVisible: true })
            FileSystem.copyAsync({from:result.uri,to:FileSystem.documentDirectory+"myimage.jpg"})
            .then(() => console.log("Moved to location"));
            try {
              await AsyncStorage.setItem('@MySuperStore:key', result.uri)
              .then(() => console.log("Saved selection to disk: " + result.uri))
              .catch(error => console.error("AsyncStorage error: " + error.message))
              .done();
              console.log("saved");
              this._retrieveData();
            } catch (error) {
              // Error saving data
            }
          }
      }
      
  } 


  render() {
    const { fahrenheit } = this.state;

    return (
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.header}>Temperature measured in:</Text>
        </View>

        <View style={styles.row}>
          <Button 
          label="Celcius"
          onPress={() => {this.setMetric(!fahrenheit);}}
          />
        </View>

        <View style={styles.row}>
          <Button 
          label="Fahrenheit"
          onPress={() => {this.setMetric(!fahrenheit);}}
          fahrenheit={fahrenheit}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.header}>Background Slides</Text>
        </View>

          <View style={styles.row}>
            <Button onPress={this.checkMultiPermissions} label="Choose Image"></Button>
          </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  header: {
    fontSize:20,
    fontWeight:"500",
  }
});

export default Settings; 