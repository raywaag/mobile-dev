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
    const passedOrigin = this.props.navigation.getParam("catOrigin", "defaultValue");
    const passedBio = this.props.navigation.getParam("catBio", "defaultValue");
    const passedTraits = this.props.navigation.getParam("catTraits", "defaultValue");
    return (
      <View style={styles.container}>
        <Image source={passedImage} style={{width:300,height:300,margin:'5%'}}/>
        <Text style={styles.imageTitle}>{passedTitle}</Text>
        <Text style={styles.catOrigin}>{passedOrigin}</Text>
        <Text style={styles.catBio}>{passedBio}</Text>
        <Text style={styles.catTraits}>{passedTraits}</Text>
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
  catOrigin: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans',
    textTransform: 'uppercase',
    fontWeight:'bold',
    marginTop: 20,
  },
  catBio: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans',
    marginTop: 10,
    padding:30,
  },
  catTraits: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans',
    fontStyle: 'italic',
    padding:30,
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
