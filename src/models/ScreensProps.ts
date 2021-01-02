import { Dispatch, SetStateAction } from 'react';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

import { Player } from './interfaces';

export interface ISetUpNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface IWatchNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface ISwitchWatchProps {
  isPaused: boolean;
  watchRunning: Player;
  watchPlayer: Player;
  releaseSwitch: Dispatch<SetStateAction<Player>>;
}