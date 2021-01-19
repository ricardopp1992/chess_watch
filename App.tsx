import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ChessAppNavigation from './src/navigation/ChessAppNavigation';

import { chessAppReducer } from './src/store/reducer';

const applicationReducer = combineReducers({
  chess: chessAppReducer
});
const store = createStore(applicationReducer);

const App = () => <Provider store={store}><ChessAppNavigation /></Provider>

export default App;

const styles = StyleSheet.create({});
