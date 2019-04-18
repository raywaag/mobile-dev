import React from 'react';
import { Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,FlatList,View } from 'react-native';
import { SearchBar} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Detail } from '../screens/Detail';
import { createStackNavigator } from 'react-navigation';
import catList from './catList.json';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      data: catList,
      error: null,
      value: ''
    };
    this.arrayholder = [];
  }

  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = catList.filter(item => {
      console.log(item.title)
      const itemData = `${item.image} ${item.title}`;
      const textData = text;
      return itemData.includes(textData);
    });
    
    this.setState({
      data: newData
    });
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
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
           <Text style={styles.getStartedText}>about that cat</Text>


           <SearchBar
            containerStyle={{width:200}}
            placeholder="Cat Breed"
            value={this.state.value}
            onChangeText={text => this.searchFilterFunction(text)}
            />

            
            <FlatList
                 keyExtractor={(item, index) => `${index}`}
                 extraData={this.state}
                 data={this.state.data}
                 renderItem={({item}) => <TouchableOpacity onPress={() => navigate("Details",{ catName:item.key, catImage:item.image, catTitle:item.title, catOrigin:item.origin, catBio:item.bio, catTraits:item.traits  })}>
               <Image source={this.getImage(item.image)} style={styles.image} />
               <Text style={{textAlign:"center", fontSize: 20}}>{item.title}</Text>
             </TouchableOpacity>}
           />
        </View>
      </ScrollView>
    </View>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    borderRadius:12,
    width:300,
    height:300,
    margin:"5%",
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    marginTop: 40,
    padding:15,
    fontSize: 35,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 34,
    textAlign: 'center',
    fontFamily: 'Hiragino Mincho ProN',
  },
  dropDown: {
    width:100,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});