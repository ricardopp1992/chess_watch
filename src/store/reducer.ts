import { actionsEnum } from '../models/enums';
import { IActionChessReducer, IStoreChess, ISavedTime } from '../models/interfaces';

const { ADD_BLACKS_NAME, ADD_WHITES_NAME, SET_LAST_TIME } = actionsEnum;

const initialState: IStoreChess = {
  blacksName: 'Blacks',
  whitesName: 'Whites',
  lastTimes: [{id: '1', time: [0, 10, 0]}, {id: '2', time: [0, 30, 0]}, {id: '3', time: [1, 0, 0]}]
};

export const chessAppReducer = (state = initialState, action: IActionChessReducer) => {
  switch(action.type) {
    case ADD_BLACKS_NAME:
      return { ...state, blacksName: action.payload };
    case ADD_WHITES_NAME:
      return { ...state, whitesName: action.payload };
    case SET_LAST_TIME:
      let newTime: ISavedTime = {id: '1', time: []};

      if (typeof action.payload != 'string') {
        newTime = action.payload;
      }

      const newTimesArray: ISavedTime[] = [newTime, ...state.lastTimes];

      const lastTimes = newTimesArray.reduce((acc: ISavedTime[], curr: ISavedTime, index) => {
        if (index === 0) return [curr];
        
        if (newTimesArray.some(({ time }, indexSome) =>
          index >= 2
          && indexSome <= index
          && indexSome != index
          && time[0] === curr.time[0]
          && time[1] === curr.time[1]
          && time[2] === curr.time[2])) {
          return acc;
        }

        return [...acc, curr];
      }, [])
      .slice(0, 3)
      .map((time, i) => {
        time.id =  `${i + 1}`;
        return time;
      });

      return { ...state, lastTimes };
    default:
      return state;
  }
}