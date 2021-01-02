import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton: FunctionComponent = (props) => {
  return <HeaderButton {...props} title="" IconComponent={Ionicons} iconSize={23} color="#fff" />;
}

const styles = StyleSheet.create({});

export default CustomHeaderButton;