import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Detail extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const passedImage = this.props.navigation.getParam("catImage", "defaultValue");
    const passedTitle = this.props.navigation.getParam("catTitle", "defaultValue");
    const passedDetails = this.props.navigation.getParam("catDetails", "defaultValue");
    return (
      <View style={styles.container}>
        <Image source={passedImage} style={{width:300,height:300,margin:'5%'}}/>
        <Text style={styles.imageTitle}>{passedTitle}</Text>
        <Text style={styles.imageDetails}>{passedDetails}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
   }
  }

const styles = StyleSheet.create({
  imageTitle: {
    fontSize: 30,
    fontFamily: 'Hiragino Mincho ProN',
  },
  imageDetails: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans',
    textTransform: 'uppercase',
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
