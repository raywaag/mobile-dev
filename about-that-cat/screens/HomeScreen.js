import React from 'react';
import { Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,FlatList,View, Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Detail } from '../screens/Detail';
import { createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;

    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
           <Text style={styles.getStartedText}>about that cat</Text>

            <Dropdown
              containerStyle={{width:200}}
              label='Favorite Fruit'
              textColor="#707070"
              label='Cat Breed'
              data={data}
            />

            <FlatList
             data={[
                   {key: 'cat1',
                    image: require('../assets/images/paw-gent_queen.png'),
                    title:'The PAW-gent Queen',
                    author:"By Willow the Beutiful Cat"},
                   {key: 'cat2',
                    image: require('../assets/images/cats-in-food-11.jpg'),
                    title:'Blueberry Bob',
                    author:"By Cats In Food"},
                   {key: 'cat3',
                    image: require('../assets/images/mad_fluff.png'),
                    title:'Princess of PURRRRsia',
                    author:"By Mad Fluff"},
                   {key: 'cat4',
                    image: require('../assets/images/spot_the_cat.png'),
                    title:'Where The Cat At?',
                    author:"By Henry the Colorado Dog"}
                  ]}
                 keyExtractor={this._keyExtractor}
                 renderItem={({item}) => <TouchableOpacity onPress={() => navigate("Details",{ catName:item.key, catImage:item.image, catTitle:item.title, catAuthor:item.author  })}>
               <Image source={item.image} style={styles.image} />
               <Text style={{textAlign:"center", fontSize: 20}}>{item.title}</Text>
               <Text style={{textAlign:"center", marginBottom:30}}>{item.author}</Text>
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
    borderRadius:22,
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