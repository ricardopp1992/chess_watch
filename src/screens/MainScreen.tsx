import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

import PrimaryTouchable from '../components/PrimaryTouchable';
import { NavigationScreenFunctionComponent } from '../models/NavigationScreens';
import Colors from '../constants/Color';

const chessTable = require('../../assets/chess_table.png');
const chessQueens = require('../../assets/chess_queens.png');

interface IMainScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MainScreen: NavigationScreenFunctionComponent<IMainScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground  source={chessTable} resizeMode="repeat" style={styles.backgroundImage}>
        <Image
          source={chessQueens}
          resizeMode="center"
          style={styles.chessQueens}
          />
        <Text style={styles.title}>Chess Watch</Text>
        <PrimaryTouchable title="Instructions" navigateTo={() => props.navigation.navigate('Instruction')} />
        <PrimaryTouchable title="History" navigateTo={() => props.navigation.navigate('History')}/>
        <PrimaryTouchable
          navigateTo={() => props.navigation.navigate('SetupWatch')}
          title="START"
          touchStyles={{ marginTop: '30%'}} />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

MainScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: '',
    headerStyle: {
      backgroundColor: '#6d3600'
    },
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: '60%',
    zIndex: 10,
    fontSize: 25,
    borderRadius: 10,
    color: Colors.text,
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: '20%',
    padding: '3%',
  },
  backgroundImage: {
    flex: 1,
  },
  chessQueens: {
    flex: -1,
    position: 'absolute',
    marginLeft: '10%',
    marginTop: '20%',
    width: '80%',
    height: '80%',
  },
});

export default MainScreen;