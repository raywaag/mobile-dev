import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  AsyncStorage,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import Button from "./Button";
import * as Expo from "expo";
import Forecast from "./Forecast";
import LocationButton from "./LocationButton";
import textStyles from "./styles/typography.js";
import ForecastCard from './ForecastCard';

const { width, height } = Dimensions.get('window');


// This version uses flowers.png from local assets
//import PhotoBackdrop from "./PhotoBackdrop/local_image";

// This version pulls a specified photo from the camera roll
 import PhotoBackdrop from './PhotoBackdrop/local_image';

class WeatherProject extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props);

    this.state = { 
      forecast: [],
      time: "",
      latitude: 0,
      longitude: 0,
      error: null,
    };
  }

  updateTime = () => {
      this.setState({time:new Date(Date.now()).toLocaleTimeString()})
  } 
    
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
  _retrieveData = async () => {
      console.log("Retrieving Data");
        try {
          const value = await AsyncStorage.getItem('@MySuperStore:key');
          if (value !== null) {
            // We have data!!
            console.log("Got data");
            console.log(value);
            this.setState({ newPostImage:value, createPostModalVisible: true })
          } else {
            console.log("No data");
          }
        } catch (error) {
          console.log(error);
          // Error retrieving data
        }
      }

  componentDidMount = () => {
      
      // updating clock every second
      setInterval(this.updateTime, 1000);

      // Image SlideShow
   const numOfBackground = 5;
    let scrollValue = 0, scrolled = 0;
    setInterval(function () {
        scrolled++;
        if(scrolled < numOfBackground)
            scrollValue = scrollValue + width;
        else{
            scrollValue = 0;
            scrolled = 0
        }
        _scrollView.scrollTo({ x: scrollValue, animated: false })
    }, 3000);

      // Get the user's location
      this.getLocation();
  } 

  getLocation(){

		// Get the current position of the user
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState(
					(prevState) => ({
					latitude: position.coords.latitude, 
					longitude: position.coords.longitude
					}), () => { this.getWeather(); }
				);
			},
			(error) => this.setState({ forecast: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		);
	}


  getWeather(){

        // Construct the API url to call
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=ec655a884baf839125ea8e2b3e21b5f0';

        // Call the API, and set the state of the weather forecast
        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState((prevState, props) => ({
            forecast: data
          }));
        })
    }


  render() {

    return (
      <PhotoBackdrop image={this.state.newPostImage}>
        <View style={styles.overlay}>

        <ScrollView 
        style = {{position: 'absolute'}}
        ref={(scrollView) => { _scrollView = scrollView; }}
        horizontal={true} pagingEnabled={true} 
        >
          <Image source={require('./images/1.jpg')} style={{height, width}} />
          <Image source={require('./images/2.jpg')} style={{height, width}} />
          <Image source={require('./images/3.jpg')} style={{height, width}} />
          <Image source={require('./images/4.jpg')} style={{height, width}} />
          <Image source={require('./images/5.jpg')} style={{height, width}} />
        </ScrollView>

          <View style={styles.settings}>
          <Button
              label="Settings"
              onPress={() =>
                this.props.navigation.navigate('Settings')
              }
            />
          </View>


          <View style={styles.row}>
            <Text style={styles.clockStyle}>{this.state.time}</Text>
          </View>
          
          <FlatList data={this.state.forecast.list} style={{marginTop:20}} keyExtractor={item => item.dt_txt} renderItem={({item}) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />

        </View>
      </PhotoBackdrop>
    );
  }
}

const styles = StyleSheet.create({
  overlay: { backgroundColor: "rgba(0,0,0,0.1)" },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  settings: {
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 24
  },
  clockStyle: {
    color:"white",
    fontSize:44,
  },
  zipContainer: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    width: 80,
    height: textStyles.baseFontSize * 2,
    justifyContent: "flex-end"
  },
  zipCode: { flex: 1 
  }
});

export default WeatherProject;
