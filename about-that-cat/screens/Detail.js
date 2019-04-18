import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Detail extends React.Component {
  static navigationOptions = {
    header: null
  };


  getImage = (image) => {
    switch (image) {
        case "AmSh":
            return require("../assets/images/american-shorthair.jpg");
            break;
        case "ArMa":
            return require("../assets/images/Arabian-Mau.jpeg");
            break;
        case "Beng":
            return require("../assets/images/bengal.jpg");
            break;
        case "Bomb":
            return require("../assets/images/bombay.jpg");
            break;
        case "Burm":
            return require("../assets/images/burmese.jpg");
            break;  
        case "CaSp":
            return require("../assets/images/cali-spangled.png");
            break;
        case "Chee":
            return require("../assets/images/cheetoh_cat.jpg");
            break;
        case "CoRe":
            return require("../assets/images/cornishrex.png");
            break;
        case "EgMa":
            return require("../assets/images/egyptian_mau.jpg");
            break;
        case "Hima":
            return require("../assets/images/himalayan.jpg");
            break;  
        case "Java":
            return require("../assets/images/javanese.jpeg");
            break;
        case "Kora":
            return require("../assets/images/korat.jpeg");
            break;
        case "MaCo":
            return require("../assets/images/mainecoon.jpg");
            break;
        case "Manx":
            return require("../assets/images/manx.jpg");
            break;
        case "NoFo":
            return require("../assets/images/forestcat.jpg");
            break;  
        case "Ocic":
            return require("../assets/images/ocicat.jpg");
            break;
        case "Orie":
            return require("../assets/images/oriental.jpg");
            break;
        case "Pers":
            return require("../assets/images/persian.jpg");
            break;
        case "Ragd":
            return require("../assets/images/ragdoll.png");
            break;
        case "RuBl":
            return require("../assets/images/russian_blue.jpeg");
            break;  
        case "Sava":
            return require("../assets/images/savannah.jpg");
            break;
        case "Siam":
            return require("../assets/images/siamese.jpg");
            break;
        case "Sphy":
            return require("../assets/images/sphynx.jpeg");
            break;
        case "Tonk":
            return require("../assets/images/tonkinese.jpg");
            break;
        case "Toyg":
            return require("../assets/images/toyger.jpg");
            break;  
        case "TuVa":
            return require("../assets/images/Turkish-Van.jpg");
            break;
        case "YoCh":
            return require("../assets/images/york-choc.jpg");
            break;
       
        default:
            return require("../assets/images/american-shorthair.jpg");
            break;
    }
}

  render() {
    const passedImage = this.props.navigation.getParam("catImage", "defaultValue");
    const passedTitle = this.props.navigation.getParam("catTitle", "defaultValue");
    const passedOrigin = this.props.navigation.getParam("catOrigin", "defaultValue");
    const passedBio = this.props.navigation.getParam("catBio", "defaultValue");
    const passedTraits = this.props.navigation.getParam("catTraits", "defaultValue");
    return (
      <View style={styles.container}>
        <Image source={this.getImage(passedImage)} style={{width:300,height:300,margin:'5%'}}/>
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
