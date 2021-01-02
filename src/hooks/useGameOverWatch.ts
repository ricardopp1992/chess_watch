import { Dispatch, SetStateAction, useEffect } from 'react';
import { Alert } from 'react-native';

import { Player } from '../models/interfaces';

const useGameOverWatch = (handleGameOver: Function, time: number[], watchRunning: Player, pauseTime: Function) => {
  useEffect(() => {
    if (!time.some(unit => unit !== 0)) {
      pauseTime();
      Alert.alert('Game OVER', `Winner ${whosWinner(watchRunning)}`, [
        {
          text: 'Ok',
          onPress: () => handleGameOver()
        }
      ],
      {
        cancelable: false
      })
    }
  }, [time]);
};

const whosWinner: Function = (watchRunning: Player) => {
  return watchRunning === Player.BLACKS ? Player.WHITES : Player.BLACKS;
}

export default useGameOverWatch;