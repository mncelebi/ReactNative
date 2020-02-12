import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Search from './screens/Search';
import Camera from './screens/Camera';
import Recortlist from './screens/Recortlist';
import Giris from './login/Giris';
import SignUp from './login/SignUp';

const LoginNavigator = createStackNavigator(
  {
    Giris,
    SignUp,
  },
  {
    headerMode: 'none',
  },
);

const HomeNavigator = createStackNavigator(
  {
    Giris: LoginNavigator,
    Home,
  },
  {
    headerMode: 'none',
  },
);

HomeNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index < 1) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Search: Search,
    Recortlist: Recortlist,
    Camera: Camera,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({}),
    tabBarOptions: {
      activeTintColor: '#be3144',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
