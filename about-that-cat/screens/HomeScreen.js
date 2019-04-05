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
      value: 'American Shorthair',
    }, {
      value: 'Arabian Mau',
    }, {
      value: 'Bengal',
    },
    {
      value: 'Bombay',
    },
    {
      value: 'Burmese',
    },
    {
      value: 'California Spangled',
    },
    {
      value: 'Cheetoh',
    },
    {
      value: 'Cornish Rex',
    },
    {
      value: 'Egyptian Mau',
    },
    {
      value: 'Himalayan',
    },
    {
      value: 'Javanese',
    },
    {
      value: 'Korat',
    },
    {
      value: 'Maine Coon',
    },
    {
      value: 'Manx',
    },
    {
      value: 'Norwegian Forest Cat',
    },
    {
      value: 'Ocicat',
    },
    {
      value: 'Oriental',
    },
    {
      value: 'Persian',
    },
    {
      value: 'Ragdoll',
    },
    {
      value: 'Russian Blue',
    },
    {
      value: 'Savannah',
    },
    {
      value: 'Siamese',
    },
    {
      value: 'Sphynx',
    },
    {
      value: 'Tonkinese',
    },
    {
      value: 'Toyger',
    },
    {
      value: 'Turkish Van',
    },
    {
      value: 'York Chocolate',
    }];

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
           <Text style={styles.getStartedText}>about that cat</Text>

            <Dropdown
              containerStyle={{width:200}}
              label='Cat Breeds'
              textColor="#707070"
              data={data}
            />

            <FlatList
             data={[
                   {key: 'cat1',
                    image: require('../assets/images/american-shorthair.jpg'),
                    title:'American Shorthair',
                    details:'cat details description',
                    },
                   {key: 'cat2',
                    image: require('../assets/images/Arabian-Mau.jpeg'),
                    title:'Arabian Mau',
                    details:'cat details description',
                    },
                   {key: 'cat3',
                    image: require('../assets/images/bengal.jpg'),
                    title:'Bengal',
                    details:'cat details description',
                    },
                   {key: 'cat4',
                    image: require('../assets/images/bombay.jpg'),
                    title:'Bombay',
                    details:'cat details description',
                    },
                    {key: 'cat5',
                    image: require('../assets/images/burmese.jpg'),
                    title:'Burmese',
                    details:'cat details description',
                    },
                    {key: 'cat6',
                    image: require('../assets/images/cali-spangled.png'),
                    title:'California Spangled',
                    details:'cat details description',
                    },
                    {key: 'cat7',
                    image: require('../assets/images/cheetoh_cat.jpg'),
                    title:'Cheetoh',
                    details:'cat details description',
                    },
                    {key: 'cat8',
                    image: require('../assets/images/cornishrex.png'),
                    title:'Cornish Rex',
                    details:'cat details description',
                    },
                    {key: 'cat9',
                    image: require('../assets/images/egyptian_mau.jpg'),
                    title:'Egyptian Mau',
                    details:'cat details description',
                    },
                    {key: 'cat10',
                    image: require('../assets/images/himalayan.jpg'),
                    title:'Himalayan',
                    details:'cat details description',
                    },
                    {key: 'cat11',
                    image: require('../assets/images/javanese.jpeg'),
                    title:'Javanese',
                    details:'cat details description',
                    },
                    {key: 'cat12',
                    image: require('../assets/images/korat.jpeg'),
                    title:'Korat',
                    details:'cat details description',
                    },
                    {key: 'cat13',
                    image: require('../assets/images/mainecoon.jpg'),
                    title:'Maine Coon',
                    details:'cat details description',
                    },
                    {key: 'cat14',
                    image: require('../assets/images/manx.jpg'),
                    title:'Manx',
                    details:'cat details description',
                    },
                    {key: 'cat15',
                    image: require('../assets/images/forestcat.jpg'),
                    title:'Norwegian Forest Cat',
                    details:'cat details description',
                    },
                    {key: 'cat16',
                    image: require('../assets/images/ocicat.jpg'),
                    title:'Ocicat',
                    details:'cat details description',
                    },
                    {key: 'cat17',
                    image: require('../assets/images/oriental.jpg'),
                    title:'Oriental',
                    details:'cat details description',
                    },
                    {key: 'cat18',
                    image: require('../assets/images/persian.jpg'),
                    title:'Persian',
                    details:'cat details description',
                    },
                    {key: 'cat19',
                    image: require('../assets/images/ragdoll.png'),
                    title:'Ragdoll',
                    details:'cat details description',
                    },
                    {key: 'cat20',
                    image: require('../assets/images/russian_blue.jpeg'),
                    title:'Russian Blue',
                    details:'cat details description',
                    },
                    {key: 'cat21',
                    image: require('../assets/images/savannah.jpg'),
                    title:'Savannah',
                    details:'cat details description',
                    },
                    {key: 'cat22',
                    image: require('../assets/images/siamese.jpg'),
                    title:'Siamese',
                    },
                    {key: 'cat23',
                    image: require('../assets/images/sphynx.jpeg'),
                    title:'Sphynx',
                    details:'cat details description',
                    },
                    {key: 'cat24',
                    image: require('../assets/images/tonkinese.jpg'),
                    title:'Tonkinese',
                    details:'cat details description',
                    },
                    {key: 'cat25',
                    image: require('../assets/images/toyger.jpg'),
                    title:'Toyger',
                    details:'cat details description',
                    },
                    {key: 'cat26',
                    image: require('../assets/images/Turkish-Van.jpg'),
                    title:'Turkish Van',
                    details:'cat details description',
                    },
                    {key: 'cat27',
                    image: require('../assets/images/york-choc.jpg'),
                    title:'York Chocolate',
                    details:'cat details description',
                    }
                  ]}
                 keyExtractor={this._keyExtractor}
                 renderItem={({item}) => <TouchableOpacity onPress={() => navigate("Details",{ catName:item.key, catImage:item.image, catTitle:item.title, catDetails:item.details  })}>
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