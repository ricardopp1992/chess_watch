import React, { FunctionComponent } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight, ViewStyle } from 'react-native';
import Colors from '../constants/Color';

interface IPrimaryTouchable {
  title: string;
  touchStyles?: ViewStyle;
  navigateTo?: (event: GestureResponderEvent) => void;
}

const PrimaryTouchable: FunctionComponent<IPrimaryTouchable> = ({ title, touchStyles = {}, navigateTo }) => {

  return (
    <TouchableHighlight
      onPress={navigateTo}
      style={[styles.navigateTouchable, touchStyles]}
      underlayColor="#6d3600">
      <Text style={styles.touchableText} >{ title }</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  touchableText: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: 20,
  },
  navigateTouchable: {
    backgroundColor: Colors.secondary,
    width: '40%',
    marginLeft: '30%',
    marginTop: '20%',
    padding: '2%',
    borderRadius: 10,
  },
});


export default PrimaryTouchable;