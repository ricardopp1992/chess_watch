import { actionsEnum } from "./enums";

export enum Player {
  BLACKS = 'blacks',
  WHITES = 'whites'
}

export interface IStoreChess {
  blacksName: string;
  whitesName: string;
  lastTimes: ISavedTime[]
}

export interface ISavedTime {
  id: string;
  time: number[];
}

export interface IActionChessReducer {
  type: actionsEnum;
  payload: string | {id: string, time: number[]}
}

export interface INewTimeModal {
  isVisible: boolean;
  goNextPage: Function;
  closeModal: Function;
}