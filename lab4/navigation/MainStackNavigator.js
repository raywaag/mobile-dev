import { createStackNavigator } from 'react-navigation';
import WeaatherProject from './weather_project_1';
import Settings from './Settings/Settings';

const AppNavigator = createStackNavigator({
  Home: { screen: WeaatherProject },
  Settings: { screen: Settings},
});

export default AppNavigator;