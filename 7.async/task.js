class AlarmClock {

    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time, callback, id) {
        this.time = time;
        this.callback = callback;
        this.timerId = timerId;
        if (this.timerId === undefined) {
            throw new error('Вы забыли передать id');
        }

        if (this.alarmCollection.some(id)) {
            console.error('Такой звонок уже существует');
        } else {
            this.alarmCollection.push(id);
        }
        this.alarmCollection.push({
            timerId: timerId,
            callback: callback,
            time: time
        });
    }

    removeClock(id) {
        if (this.alarmCollection.findIndex(id)) {
            this.alarmCollection.splice(item, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        return Date.now();
    }

    /*start(){
      checkClock(id) => this.time === Date.now() {
        callback();
      }

    }*/

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id, item.time));
    }

}