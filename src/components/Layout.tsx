import React, { FunctionComponent } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, View } from 'react-native';

import chessPieces from '../../assets/chess_pieces.png';
import Colors from '../constants/Color';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <View style={styles.container}>
      {
        children
      }
      <ImageBackground
        source={chessPieces}
        width={100}
        height={100}
        imageStyle={{ marginTop: '0%', height: '100%' }}
        style={styles.layoutBottomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layoutBottomImage: {
    flex: 9,
    backgroundColor: `${Colors.primary}`,
    position: 'absolute',
    width: '100%',
    height: '13%',
    bottom: 0,
  }
});

export default Layout;