class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Вы забыли передать id');
        }

        if (this.alarmCollection.some((value) => value.id === id)) {
            console.error('Такой звонок уже существует');
            return;
        } 

        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id
        });
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex((item) => item.id === id);

        if (index !== -1) {
            this.alarmCollection.splice(index, 1);
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
         if (ring.time === this.getCurrentFormattedTime()) {
                ring.callback();
            }
        }
        let checkClockBind = checkClock.bind(this);
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach((ring) => checkClockBind(ring)), 2000);
        }
    }

    stop(){
        if(this.timerId){
          clearInterval(this.timerId);
          this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id, item.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}