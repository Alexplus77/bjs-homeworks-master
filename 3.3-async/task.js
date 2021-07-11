class AlarmClock {
  constructor() {
    this.alarmCollection = [];
  }
  addClock(time, callback, id) {
    if (!id) {
      throw new Error("ID не задан");
    }
    if (this.alarmCollection.find((n) => n.id === id)) {
      console.error("Звонок с таким ID уже существует");
      return;
    } else {
      this.alarmCollection.push({
        id,
        time,
        callback,
      });
      console.log(this.alarmCollection);
    }
  }
  removeClock(id) {
    if (
      this.alarmCollection.find((elem, i) => {
        if (elem.id === id) {
          this.alarmCollection.splice(i, 1);
          return true;
        }
      })
    ) {
      return true;
    } else {
      return false;
    }
  }
  getCurrentFormattedTime() {
    return time;
  }
  start() {}
  stop() {}
  printAlarms() {}
  clearAlarms() {}
}

let phoneAlarm = new AlarmClock();

console.log(
  phoneAlarm.addClock("09:05", () => console.log("Пора вставать"), 1)
);
console.log(
  phoneAlarm.addClock("10:35", () => console.log("Пора вставать"), 2)
);
console.log(
  phoneAlarm.addClock("11:35", () => console.log("Пора вставать"), 3)
);
console.log(
  phoneAlarm.addClock("12:35", () => console.log("Пора вставать"), 4)
);
console.log(phoneAlarm.removeClock(3));
