import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Giris from './login/Giris';
import Router from './Router';

const TabNavigator1 = createStackNavigator(
  {
    Giris: Giris,
    Router: Router,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({}),
  },
);

export default createAppContainer(TabNavigator1);
