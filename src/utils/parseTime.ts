export default class ParseTime {
  public static parseArrayTime (arrTime: number[]) {
    return arrTime.map(el => `${el}`.length < 2 ? `0${el}` : el).join(':');
  }
}