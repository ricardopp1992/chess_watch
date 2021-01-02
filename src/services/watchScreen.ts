export class WatchScreenService {
  public static manageCronometer (prevState: number[]) {
    let [hours, minutes, seconds] = prevState;
    let dicresMinutes: boolean = false;
    let dicresHours: boolean = false;

    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      dicresMinutes = true;
    }

    if (dicresMinutes && minutes > 0) {
      minutes--;
    } else if (minutes === 0 && hours > 0) {
      minutes = 59;
      dicresHours = true;
    }

    if (dicresHours && hours > 0) {
      hours--;
    }

    return [hours, minutes, seconds];
  }

  public static isGameOver() {

  }
}