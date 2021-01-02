import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import SetUpWatchScreen from '../screens/SetUpWatchScreen';
import WatchScreen from '../screens/WatchScreen';
import InstructionScreen from '../screens/InstructionScreen';
import MainScreen from '../screens/MainScreen';
import HistoryScreen from '../screens/HistoryScreen';
import CustomHeaderButton from '../components/HeaderButton';

import Colors from '../constants/Color';

const ChessNavigator = createStackNavigator({
  Main: {
    screen: MainScreen as any,
    navigationOptions: (navOption: any) => ({
      headerLeft: (props) => (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => navOption.navigation.toggleDrawer()} />
      </HeaderButtons>),
    })
  },
  History: HistoryScreen as any,
  SetupWatch: SetUpWatchScreen,
  Watch: {
    screen: WatchScreen as any
  },
  Instruction: InstructionScreen
},
{
  defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: Colors.text,
  }
});

const MainNavigator = createDrawerNavigator({
  ChessNavigator: {
    screen: ChessNavigator,
    navigationOptions: {
      title: 'Home'
    }
  },
});

export default createAppContainer(MainNavigator);