export interface ISavedTime {
  id: number;
  time: number[];
}

export enum Player {
  BLACKS = 'blacks',
  WHITES = 'whites'
}

export interface IStoreChess {
  blacksName: string;
  whitesName: string;
  lastTimes: ITimesStore[]
}

export interface ITimesStore {
  id: number,
  time: number[]
}