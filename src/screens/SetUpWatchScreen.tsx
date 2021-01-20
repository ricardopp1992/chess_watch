import React, { FunctionComponent, useState } from 'react';
import { ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../components/Layout';
import PrimaryTouchable from '../components/PrimaryTouchable';
import NewTimeModal from '../components/NewTimeModal';
import { ISavedTime, IStoreChess } from '../models/interfaces';
import { ISetUpNavigationProps } from '../models/ScreensProps';

import Colors from '../constants/Color';
import ParseTime from '../utils/parseTime';
import { actionsEnum } from '../models/enums';

const WATCH = 'Watch';
const { SET_LAST_TIME } = actionsEnum;

const SetUpWatchScreen: FunctionComponent<ISetUpNavigationProps> = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const lastTimesStore: any = useSelector<{chess: IStoreChess}>((store) => store.chess.lastTimes);
  const dispatch = useDispatch();

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

  const navigateToWatchAndSetTime = (time: number[]) => {
    dispatch({ type: SET_LAST_TIME, payload: { id: '1', time } });
    navigation.navigate({ routeName: WATCH, params: { time } });
  }

  const openNewTimeModal = () => setIsVisible(true);

  const closeNewTimeModal = (whitesName: string, blacksName: string, time: number[]) => {
    setIsVisible(false);
    navigation.navigate({ routeName: WATCH, params: { whitesName, blacksName, time } });
  }

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.selectTimeText}>
          <Text style={styles.selectTimeText}>SELECT TIME</Text>
        </View>
        <View style={styles.timeList}>
          <FlatList
            style={{ width: '100%', alignSelf: 'center' }}
            keyExtractor={(item) => `${item.id}`}
            data={lastTimesStore}
            renderItem={timeItem} />
        </View>
        <View style={styles.touchableContainer}>
          <PrimaryTouchable title="New Time" touchStyles={styles.newTimeButton} navigateTo={openNewTimeModal} />
        </View>
        <NewTimeModal goNextPage={closeNewTimeModal} closeModal={() => setIsVisible(false)} isVisible={isVisible} />
      </View>
    </Layout>
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