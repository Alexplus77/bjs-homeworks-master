class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
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
    const index = this.alarmCollection.findIndex((elem) => elem.id === id);
    if (index > -1) {
      this.alarmCollection.splice(index, 1);
      return true;
    }
    return false;
  }
  getCurrentFormattedTime() {
    const timeNow = new Date().toLocaleTimeString().slice(0, -3);
    return timeNow;
  }

  checkClock() {
    this.alarmCollection.find((elem) => {
      if (elem.time === this.getCurrentFormattedTime()) {
        return elem.callback();
      }
    });
  }

  alarmCallInterval() {
    this.alarmCollection.forEach((elem) => this.checkClock());
  }
  start() {
    this.checkClock();
    if (this.timerId === null) {
      this.timerId = setInterval(this.alarmCallInterval, 1000);
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms() {
    this.alarmCollection.forEach((elem) =>
      console.log(`Будильник ${elem.id} заведен на ${elem.time}`)
    );
  }
  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection.length = null;
  }
}

let phoneAlarm = new AlarmClock();

console.log(
  phoneAlarm.addClock("09:05", () => console.log("Пора вставать"), 1)
);
console.log(
  phoneAlarm.addClock("10:45", () => console.log("Пора вставать"), 2)
);
console.log(
  phoneAlarm.addClock("11:35", () => console.log("Пора вставать"), 2)
);
console.log(
  phoneAlarm.addClock("17:29", () => console.log("Пора вставать3"), 3)
);
//console.log(phoneAlarm.removeClock(3));

console.log(phoneAlarm.getCurrentFormattedTime());
console.log(phoneAlarm.printAlarms());
console.log(phoneAlarm.checkClock());
console.log(phoneAlarm.start());
//console.log(phoneAlarm.stop());
console.log(phoneAlarm.clearAlarms());

console.log(phoneAlarm);
