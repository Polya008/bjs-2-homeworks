class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        this.time = time;
        this.callback = callback;
        this.id = id;
        if (!id) {
            throw new Error('Вы забыли передать id');
        }

        if (this.alarmCollection.some((value) => value === id)) {
            console.error('Такой звонок уже существует');
        } else {
            this.alarmCollection.push(id);
        }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id
        });
    }

    removeClock(id) {
        if (this.alarmCollection.findIndex((item) => item === id)) {
            this.alarmCollection.splice(item, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }



    start() {
        function checkClock(ring) {
            if ((ring) => this.time === this.getCurrentFormattedTime()) {
                return ring.callback();
            }
        }
        if (!this.id) {
            const interval = setInterval(() => this.alarmCollection.forEach((ring) => checkClock()));
        }
    }




    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id, item.time));
    }


    clearAlarms(){
        this.stop();
        this.alarmCollection.splice(0,this.alarmCollection.length);
  }
}