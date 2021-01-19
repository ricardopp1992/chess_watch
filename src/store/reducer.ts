import { IStoreChess, ITimesStore } from '../models/interfaces';
import { actionsEnum } from '../models/enums';

const { ADD_BLACKS_NAME, ADD_WHITES_NAME, SET_LAST_TIME } = actionsEnum;

const initialState: IStoreChess = {
  blacksName: 'Blacks',
  whitesName: 'Whites',
  lastTimes: [{id: 1, time: [0, 10, 0]}, {id: 2, time: [0, 30, 0]}, {id: 3, time: [1, 0, 0]}]
};

export const chessAppReducer = (state = initialState, action: {type: actionsEnum, payload: string | {id: number, time: number[]} }) => {
  switch(action.type) {
    case ADD_BLACKS_NAME:
      return { ...state, blacksName: action.payload };
    case ADD_WHITES_NAME:
      return { ...state, whitesName: action.payload };
    case SET_LAST_TIME:
      let newTime: ITimesStore = {id: 1, time: []};

      if (typeof action.payload != 'string') {
        newTime = action.payload;
      }

      const newTimesArray: ITimesStore[] = [newTime, ...state.lastTimes];
 
      const lastTimes = newTimesArray.reduce((acc: ITimesStore[], curr: ITimesStore, index) => {
        if (index === 0) return [curr];
        
        if (newTimesArray.some(({ time }, indexSome) =>
          indexSome != index
          && index < indexSome
          && time[0] === curr.time[0]
          && time[1] === curr.time[1]
          && time[2] === curr.time[2])) {
          return acc;
        }

        return [...acc, curr];
      }, []);

      return { ...state, lastTimes };
    default:
      return state;
  }
}