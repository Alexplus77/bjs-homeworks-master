class AlarmClock {
  constructor() {
    (this.alarmCollection = []), this.timerId;
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
    const timeNow = new Date().toLocaleTimeString().slice(0, -3);
    return timeNow;
  }
  checkClock() {
    return this.alarmCollection.find((elem) => {
      if (elem.time === this.getCurrentFormattedTime()) {
        return true;
      }
    });
  }
  start() {
    if (this.checkClock()) {
      console.log(this.getCurrentFormattedTime());
      return this.alarmCollection.find((elem) => {
        elem.callback;
      });
    }
  }
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
  phoneAlarm.addClock("11:35", () => console.log("Пора вставать"), 2)
);
console.log(
  phoneAlarm.addClock("20:50", () => console.log("Пора вставать"), 3)
);
//console.log(phoneAlarm.removeClock(3));

console.log(phoneAlarm.getCurrentFormattedTime());
console.log(phoneAlarm.checkClock());
