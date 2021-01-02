import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Colors from '../constants/Color';

import { Player } from '../models/interfaces';
import { ISwitchWatchProps } from '../models/ScreensProps';

const TouchableSwitch: FunctionComponent<ISwitchWatchProps> = ({ isPaused, watchRunning, watchPlayer, releaseSwitch }) => {
  const [watch, _] = useState<Player>(watchPlayer);
  const [isPressed, setIsPressed] = useState(Player.WHITES === watchPlayer);
  const enemy = Player.BLACKS === watchPlayer ? Player.WHITES : Player.BLACKS;

  const handlePressSwitch = () => {
    if (watchRunning === watch && !isPaused) {
      releaseSwitch(enemy);
    }
  };

  useEffect(() => {
    if (watchRunning === watch) {
      setIsPressed(true);
    } else {
      setIsPressed(false);
    }
  }, [watchRunning]);

  return (
    <View style={[styles.container, { backgroundColor: isPressed ? Colors.secondary : Colors.primary }]}>
      <TouchableWithoutFeedback style={styles.touchable} onPress={handlePressSwitch} >
        <Text style={styles.switchText}>{watchPlayer}</Text>
        <Text style={styles.switchText}>{ isPressed ? 'ON' : 'OFF' }</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
  },
  touchable: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    color: Colors.text,
    textShadowRadius: 2,
    textShadowColor: Colors.textShadow,
    textShadowOffset: {
      height: 2,
      width: 2,
    }
  }
});

export default TouchableSwitch;
