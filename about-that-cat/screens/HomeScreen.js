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
                    origin:'United States',
                    bio:'The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.',
                    traits:'Active, Curious, Easy Going, Playful, Calm',
                    },
                   {key: 'cat2',
                    image: require('../assets/images/Arabian-Mau.jpeg'),
                    title:'Arabian Mau',
                    origin:'United Arab Emirates',
                    bio:'Arabian Mau cats are social and energetic. Due to their energy levels, these cats do best in homes where their owners will be able to provide them with plenty of playtime, attention and interaction from their owners. These kitties are friendly, intelligent, and adaptable, and will even get along well with other pets and children.',
                    traits:'Affectionate, Agile, Curious, Independent, Playful, Loyal',
                    },
                   {key: 'cat3',
                    image: require('../assets/images/bengal.jpg'),
                    title:'Bengal',
                    origin:'United States',
                    bio:'Bengals are a lot of fun to live with, but they are definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who does not provide it.',
                    traits:'Alert, Agile, Energetic, Demanding, Intelligent',
                    },
                   {key: 'cat4',
                    image: require('../assets/images/bombay.jpg'),
                    title:'Bombay',
                    origin:'United States',
                    bio:'The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregivers shoulder.',
                    traits:'Affectionate, Dependent, Gentle, Intelligent, Playful',
                    },
                    {key: 'cat5',
                    image: require('../assets/images/burmese.jpg'),
                    title:'Burmese',
                    origin:'Burma',
                    bio:'Burmese love being with people, playing with them, and keeping them entertained. They crave close physical contact and abhor an empty lap. They will follow their humans from room to room, and sleep in bed with them, preferably under the covers, cuddled as close as possible. At play, they will turn around to see if their human is watching and being entertained by their crazy antics.',
                    traits:'Curious, Intelligent, Gentle, Social, Interactive, Playful, Lively',
                    },
                    {key: 'cat6',
                    image: require('../assets/images/cali-spangled.png'),
                    title:'California Spangled',
                    origin:'United States',
                    bio:'Perhaps the only thing about the California spangled cat that isn’t wild-like is its personality. Known to be affectionate, gentle and sociable, this breed enjoys spending a great deal of time with its owners. They are very playful, often choosing to perch in high locations and show off their acrobatic skills.',
                    traits:'Affectionate, Curious, Intelligent, Loyal, Social',
                    },
                    {key: 'cat7',
                    image: require('../assets/images/cheetoh_cat.jpg'),
                    title:'Cheetoh',
                    origin:'United States',
                    bio:'The Cheetoh has a super affectionate nature and real love for their human companions; they are intelligent with the ability to learn quickly. You can expect that a Cheetoh will be a fun-loving kitty who enjoys playing, running, and jumping through every room in your house.',
                    traits:'Affectionate, Gentle, Intelligent, Social',
                    },
                    {key: 'cat8',
                    image: require('../assets/images/cornishrex.png'),
                    title:'Cornish Rex',
                    origin:'United Kingdom',
                    bio:'This is a confident cat who loves people and will follow them around, waiting for any opportunity to sit in a lap or give a kiss. He enjoys being handled, making it easy to take him to the veterinarian or train him for therapy work. The Cornish Rex stay in kitten mode most of their lives and well into their senior years.',
                    traits:'Affectionate, Intelligent, Active, Curious, Playful',
                    },
                    {key: 'cat9',
                    image: require('../assets/images/egyptian_mau.jpg'),
                    title:'Egyptian Mau',
                    origin:'Egypt',
                    bio:'The Egyptian Mau is gentle and reserved. She loves her people and desires attention and affection from them but is wary of others. Early, continuing socialization is essential with this sensitive and sometimes shy cat, especially if you plan to show or travel with her. Otherwise, she can be easily startled by unexpected noises or events.',
                    traits:'Agile, Dependent, Gentle, Intelligent, Lively, Loyal, Playful',
                    },
                    {key: 'cat10',
                    image: require('../assets/images/himalayan.jpg'),
                    title:'Himalayan',
                    origin:'United States',
                    bio:'Calm and devoted, Himalayans make excellent companions, though they prefer a quieter home. They are playful in a sedate kind of way and enjoy having an assortment of toys. The Himalayan will stretch out next to you, sleep in your bed and even sit on your lap when she is in the mood.',
                    traits:'Dependent, Gentle, Intelligent, Quiet, Social',
                    },
                    {key: 'cat11',
                    image: require('../assets/images/javanese.jpeg'),
                    title:'Javanese',
                    origin:'United States',
                    bio:'Javanese are endlessly interested, intelligent and active. They tend to enjoy jumping to great heights, playing with fishing pole-type or other interactive toys and just generally investigating their surroundings. He will attempt to copy things you do, such as opening doors or drawers.',
                    traits:'Active, Devoted, Intelligent, Playful',
                    },
                    {key: 'cat12',
                    image: require('../assets/images/korat.jpeg'),
                    title:'Korat',
                    origin:'Thailand',
                    bio:'The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.',
                    traits:'Active, Loyal, highly intelligent, Expressive, Trainable',
                    },
                    {key: 'cat13',
                    image: require('../assets/images/mainecoon.jpg'),
                    title:'Maine Coon',
                    origin:'United States',
                    bio:'They are known for their size and luxurious long coat Maine Coons are considered a gentle giant. The good-natured and affable Maine Coon adapts well to many lifestyles and personalities. She likes being with people and has the habit of following them around, but isn’t needy. Most Maine Coons love water and they can be quite good swimmers.',
                    traits:'Adaptable, Intelligent, Loving, Gentle, Independent',
                    },
                    {key: 'cat14',
                    image: require('../assets/images/manx.jpg'),
                    title:'Manx',
                    origin:'Isle of Man',
                    bio:'The Manx is a placid, sweet cat that is gentle and playful. She never seems to get too upset about anything. She is a loving companion and adores being with people.',
                    traits:'Easy Going, Intelligent, Loyal, Playful, Social',
                    },
                    {key: 'cat15',
                    image: require('../assets/images/forestcat.jpg'),
                    title:'Norwegian Forest Cat',
                    origin:'Norway',
                    bio:'The Norwegian Forest Cat is a sweet, loving cat. She appreciates praise and loves to interact with her parent. She makes a loving companion and bonds with her parents once she accepts them for her own. She is still a hunter at heart. She loves to chase toys as if they are real. She is territorial and patrols several times each day to make certain that all is fine.',
                    traits:'Sweet, Active, Intelligent, Social, Playful, Lively, Curious',
                    },
                    {key: 'cat16',
                    image: require('../assets/images/ocicat.jpg'),
                    title:'Ocicat',
                    origin:'United States',
                    bio:'Loyal and devoted to their owners, the Ocicat is intelligent, confident, outgoing, and seems to have many dog traits. They can be trained to fetch toys, walk on a lead, taught to speak, come when called, and follow other commands.',
                    traits:'Active, Agile, Curious, Demanding, Friendly, Gentle, Lively, Playful, Social',
                    },
                    {key: 'cat17',
                    image: require('../assets/images/oriental.jpg'),
                    title:'Oriental',
                    origin:'United States',
                    bio:'Orientals are passionate about the people in their lives. They become extremely attached to their humans, so be prepared for a lifetime commitment. When you are not available to entertain her, an Oriental will divert herself by jumping on top of the refrigerator, opening drawers, seeking out new hideaways.',
                    traits:'Energetic, Affectionate, Intelligent, Social, Playful, Curious',
                    },
                    {key: 'cat18',
                    image: require('../assets/images/persian.jpg'),
                    title:'Persian',
                    origin:'Iran (Persia)',
                    bio:'Persians are sweet, gentle cats that can be playful or quiet and laid-back. Great with families and children, they absolutely love to lounge around the house. While they don’t mind a full house or active kids, they’ll usually hide when they need some alone time.',
                    traits:'Affectionate, loyal, Sedate, Quiet',
                    },
                    {key: 'cat19',
                    image: require('../assets/images/ragdoll.png'),
                    title:'Ragdoll',
                    origin:'United States',
                    bio:'Ragdolls love their people, greeting them at the door, following them around the house, and leaping into a lap or snuggling in bed whenever given the chance. They are the epitome of a lap cat, enjoy being carried and collapsing into the arms of anyone who holds them.',
                    traits:'Affectionate, Friendly, Gentle, Quiet, Easygoing',
                    },
                    {key: 'cat20',
                    image: require('../assets/images/russian_blue.jpeg'),
                    title:'Russian Blue',
                    origin:'Russia',
                    bio:'Russian Blues are very loving and reserved. They do not like noisy households but they do like to play and can be quite active when outdoors. They bond very closely with their owner and are known to be compatible with other pets.',
                    traits:'Active, Dependent, Easy Going, Gentle, Intelligent, Loyal, Playful, Quiet',
                    },
                    {key: 'cat21',
                    image: require('../assets/images/savannah.jpg'),
                    title:'Savannah',
                    origin:'United States',
                    bio:'Savannah is the feline version of a dog. Actively seeking social interaction, they are given to pouting if left out. Remaining kitten-like through life. Profoundly loyal to immediate family members whilst questioning the presence of strangers. Making excellent companions that are loyal, intelligent and eager to be involved.',
                    traits:'Curious, Social, Intelligent, Loyal, Outgoing, Adventurous, Affectionate',
                    },
                    {key: 'cat22',
                    image: require('../assets/images/siamese.jpg'),
                    title:'Siamese',
                    origin:'Thailand',
                    bio:'While Siamese cats are extremely fond of their people, they will follow you around and supervise your every move, being talkative and opinionated. They are a demanding and social cat, that do not like being left alone for long periods.',
                    traits:'Active, Agile, Clever, Sociable, Loving, Energetic',
                    },
                    {key: 'cat23',
                    image: require('../assets/images/sphynx.jpeg'),
                    title:'Sphynx',
                    origin:'Canada',
                    bio:'The Sphynx is an intelligent, inquisitive, extremely friendly people-oriented breed. Sphynx commonly greet their owners at the front door, with obvious excitement and happiness. She has an unexpected sense of humor that is often at odds with her dour expression.',
                    traits:'Loyal, Inquisitive, Friendly, Quiet, Gentle',
                    },
                    {key: 'cat24',
                    image: require('../assets/images/tonkinese.jpg'),
                    title:'Tonkinese',
                    origin:'Canada',
                    bio:'Intelligent and generous with their affection, a Tonkinese will supervise all activities with curiosity. Loving, social, active, playful, yet content to be a lap cat.',
                    traits:'Curious, Intelligent, Social, Lively, Outgoing, Playful, Affectionate',
                    },
                    {key: 'cat25',
                    image: require('../assets/images/toyger.jpg'),
                    title:'Toyger',
                    origin:'United States',
                    bio:'The Toyger has a sweet, calm personality and is generally friendly. They are outgoing enough to walk on a leash, energetic enough to play fetch and other interactive games, and confident enough to get along with other cats and friendly dogs.',
                    traits:'Playful, Social, Intelligent',
                    },
                    {key: 'cat26',
                    image: require('../assets/images/Turkish-Van.jpg'),
                    title:'Turkish Van',
                    origin:'Turkey',
                    bio:'While the Turkish Van loves to jump and climb, play with toys, retrieve and play chase, she is is big and ungainly; this is one cat who doesn’t always land on his feet. While not much of a lap cat, the Van will be happy to cuddle next to you and sleep in your bed.',
                    traits:'Agile, Intelligent, Loyal, Playful, Energetic',
                    },
                    {key: 'cat27',
                    image: require('../assets/images/york-choc.jpg'),
                    title:'York Chocolate',
                    origin:'United States',
                    bio:'York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it is related to water: unlike many other cats, York Chocolates love it.',
                    traits:'Playful, Social, Intelligent, Curious, Friendly',
                    }
                  ]}
                 keyExtractor={this._keyExtractor}
                 renderItem={({item}) => <TouchableOpacity onPress={() => navigate("Details",{ catName:item.key, catImage:item.image, catTitle:item.title, catOrigin:item.origin, catBio:item.bio, catTraits:item.traits  })}>
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