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
  removeClock(id) {}
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
