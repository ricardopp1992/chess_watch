import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import HistoryItem from '../components/HistoryItem';
import Layout from '../components/Layout';

import { dummyData } from '../../data/dummyData';
import { NavigationScreenFunctionComponent } from '../models/NavigationScreens';

const HistoryScreen: NavigationScreenFunctionComponent = () => {

  return (
    <Layout>
      <View style={styles.container}>
        <FlatList
          style={styles.listContainer}
          keyExtractor={(item, i) => item.title}
          numColumns={2}
          data={dummyData}
          renderItem={HistoryItem} />
      </View>
    </Layout>
  );
}

HistoryScreen.navigationOptions = {
  headerTitle: 'History of games',
}

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ad6c04',
  },
  listContainer: {
    flex: 1,
    marginLeft: '20%',
  },
});
