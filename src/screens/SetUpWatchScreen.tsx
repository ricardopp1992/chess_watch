import React, { FunctionComponent, useState } from 'react';
import { ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import PrimaryTouchable from '../components/PrimaryTouchable';
import NewTimeModal from '../components/NewTimeModal';
import { ISavedTime } from '../models/interfaces';
import { ISetUpNavigationProps } from '../models/ScreensProps';

import Colors from '../constants/Color';
import ParseTime from '../utils/parseTime';

const savedTimes = [{ id: 1, time: [0, 20, 0] }, { id: 2, time: [1, 0, 0] }, { id: 3, time: [0, 0, 5] }];
const WATCH = 'Watch';

const SetUpWatchScreen: FunctionComponent<ISetUpNavigationProps> = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const timeItem: ListRenderItem<ISavedTime> = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => navigateToWatchAndSetTime(item.time)}>
          <View>
            <Text style={{ textAlign: 'center', color: Colors.text }}>{ParseTime.parseArrayTime(item.time)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const navigateToWatchAndSetTime = (time: number[]) => navigation.navigate({ routeName: WATCH, params: { time } });

  const openNewTimeModal = () => setIsVisible(true);

  const closeNewTimeModal = (whitesName: string, blacksName: string, time: number[]) => {
    setIsVisible(false);
    navigation.navigate({ routeName: WATCH, params: { whitesName, blacksName, time } });
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectTimeText}>
        <Text style={styles.selectTimeText}>SELECT TIME</Text>
      </View>
      <View style={styles.timeList}>
        <FlatList
          style={{ width: '100%', alignSelf: 'center' }}
          keyExtractor={(item) => `${item.id}`}
          data={savedTimes}
          renderItem={timeItem} />
      </View>
      <View style={styles.touchableContainer}>
        <PrimaryTouchable title="New Time" touchStyles={styles.newTimeButton} navigateTo={openNewTimeModal} />
      </View>
      <NewTimeModal goNextPage={closeNewTimeModal} closeModal={() => setIsVisible(false)} isVisible={isVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
  },
  selectTimeText: {
    width: '80%',
    color: Colors.primary,
    marginBottom: '5%',
    marginLeft: '5%',
    fontSize: 25,
  },
  timeList: {
    flex: 1,
  },
  touchableContainer: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    marginTop: 15,
    marginLeft: 35,
    width: '80%',
    borderRadius: 10,
    backgroundColor: Colors.secondary,
  },
  newTimeButton: {
    marginTop: 0,
  },
});


export default SetUpWatchScreen;