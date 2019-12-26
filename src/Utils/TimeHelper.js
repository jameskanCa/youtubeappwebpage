import * as moment from 'moment';

export default class TimeHelper {
    static formatSecondsToMinutes(duration) {
        const durationSeconds = this.obtainDurationSeconds(duration);
        const seconds = durationSeconds % 60;
        const minutes = Math.trunc(durationSeconds / 60);
        return `${minutes} Minutes ${seconds} Seconds`;
    }
    
    static obtainDurationSeconds(time) {
        const readableDuration = moment.duration(time, moment.ISO_8601);
        return readableDuration.asSeconds();
    }
    
	static obtainCurrentTime() {
		return moment().format('MMM/DD/YYYY HH:mm:ss');
    }
    
    static formatInputTime(time) {
        return moment(time).format('MMM/DD/YYYY');
    }
}