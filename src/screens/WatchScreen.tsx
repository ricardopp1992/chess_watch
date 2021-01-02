import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import TouchableSwitch from '../components/TouchableSwitch';
import useInterval from '../hooks/useInterval';
import useGameOverWatch from '../hooks/useGameOverWatch';

import { NavigationScreenFunctionComponent } from '../models/NavigationScreens';
import { IWatchNavigationProps } from '../models/ScreensProps';
import { Player } from '../models/interfaces';
import Colors from '../constants/Color';
import { WatchScreenService } from '../services/watchScreen';
import ParseTime from '../utils/parseTime';

const WatchScreen: NavigationScreenFunctionComponent<IWatchNavigationProps> = ({ navigation }) => {
  const [timeOne, setTimeOne] = useState<number[]>(navigation.getParam('time'));
  const [timeTwo, setTimeTwo] = useState<number[]>(navigation.getParam('time'));
  const [watchRunning, setWatchRunning] = useState<Player>(Player.WHITES);
  const [delay, setDelay] = useState<number>(110E9);
  const [isPaused, setIsPaused] = useState(true);

  useInterval(() => {
    if (watchRunning === Player.WHITES) {
      setTimeOne(WatchScreenService.manageCronometer);
    } else if (watchRunning === Player.BLACKS) {
      setTimeTwo(WatchScreenService.manageCronometer);
    }
  }, delay);

  const handleGameOver = () => {
    navigation.navigate('SetupWatch');
  }

  const toggleTime = () => {
    if (isPaused) {
      setDelay(1000);
    } else {
      setDelay(110E9);
    }

    setIsPaused(!isPaused);
  }

  useGameOverWatch(handleGameOver, timeOne, watchRunning, toggleTime);
  useGameOverWatch(handleGameOver, timeTwo, watchRunning, toggleTime);

  return (
    <View style={styles.container}>
      <View style={styles.timesDisplay}>
        <View style={styles.timeDisplay}>
          <TouchableSwitch
            isPaused={isPaused}
            watchPlayer={Player.WHITES}
            watchRunning={watchRunning}
            releaseSwitch={setWatchRunning} />
          <Text>{ ParseTime.parseArrayTime(timeOne) }</Text>
        </View>
        <View >
          <Text>----------------------------</Text>
        </View>
        <View style={styles.timeDisplay}>
          <Text>{ ParseTime.parseArrayTime(timeTwo) }</Text>
          <TouchableSwitch
            isPaused={isPaused}
            watchPlayer={Player.BLACKS}
            watchRunning={watchRunning}
            releaseSwitch={setWatchRunning} />
        </View>
      </View>
      <View style={styles.pauseButton}>
        <Button color={Colors.primary} title={isPaused ? 'START' : 'PAUSE'} onPress={toggleTime} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timesDisplay: {
    flex: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  timeDisplay: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pauseButton: {
    flex: 2,
    width: '80%',
    alignSelf: 'center',
  },
});

export default WatchScreen;