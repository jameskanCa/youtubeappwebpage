import TimeHelper from './Utils/TimeHelper';
import { chain, groupBy, map } from 'lodash';
import YoutubeVideoCategorization from './Utils/YoutubeVideoCategorization';
class MetricCalculation {
	static PercentageVideoCompleted(sessions) {
		let finishCount = 0;
		let unfinishedCount = 0;
		sessions.map((session) => {
			session.finishedVideo ? finishCount++ : unfinishedCount++;
		});

		return finishCount / (finishCount + unfinishedCount);
	}

	static ProcastinationCounter(sessions) {
		let procastinationVideoCounter = 0;
		let nonProcastinationVideoCounter = 0;
		sessions.map((session) => {
			if (YoutubeVideoCategorization.isProcastinationVideo(session.videoMetadata.videoCategory)) {
				procastinationVideoCounter++;
			} else {
				nonProcastinationVideoCounter++;
			}
		});
		return {
			procastinationCounter: procastinationVideoCounter,
			nonProcastinationCounter: nonProcastinationVideoCounter,
			totalVideos: procastinationVideoCounter + nonProcastinationVideoCounter
		};
	}

	static CategoryCounters(sessions) {
		let arr = Array(45).fill(0);
		return sessions.map((session) => {
			arr[parseInt(session.videoMetadata.videoCategory, 10)]++;
		});
	}

	static formatSessionDate(sessions) {
		let categoryByDate = sessions.map((session) => {
			let stringDate = TimeHelper.formatInputTime(session.startTime);
			return { date: stringDate, videoCategory: session.videoMetadata.videoCategory };
		});
		let groupedResult = chain(categoryByDate)
			.groupBy('date')
			.map((value, key) => ({ date: key, videos: value }))
			.value();
		groupedResult.map((resultGroup) => {
			this.calculateCategoryValues(resultGroup);
		});
	}

	static calculateCategoryValues(resultGroup) {
		//resultGroup.videos.map
	}
}
export default MetricCalculation;
