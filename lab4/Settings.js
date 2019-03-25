import React from "react";
import {View,ScrollView, Text, StyleSheet} from 'react-native';
import Button from "./Button";

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  }

  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { 
      temperature: '',
      scale: 'f',
    };
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

 
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {

    const scale = this.state.scale;
    const temperature = this.state.temperature;

    return (
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.header}>Temperature measured in:</Text>
        </View>

        <View style={styles.row}>
          <Button 
          label="Celcius"
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} 
          />
        </View>

        <View style={styles.row}>
          <Button 
          label="Fahrenheit"
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} 
          />
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