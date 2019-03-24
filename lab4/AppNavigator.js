import { createStackNavigator } from 'react-navigation';
import WeatherProject from './WeatherProject';
import Settings from './Settings';

const AppNavigator = createStackNavigator({
  Home: { screen: WeatherProject },
  Settings: { screen: Settings},
});

export default AppNavigator;