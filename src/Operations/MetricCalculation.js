import TimeHelper from '../Utils/TimeHelper';
import { chain, groupBy, map } from 'lodash';
import YoutubeVideoCategorization from '../Utils/YoutubeVideoCategorization';
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
		sessions.map((session) => {
			arr[parseInt(session.videoMetadata.videoCategory, 10)]++;
		});
		return arr;
	}

	/** 
	 * Input: Client should define length/number of aggregated days
	 * in question. 
	 * Output: Returns an array of arrays where each sub-array
	 * holds the values 0 - 44 representing video categories
	*/
	static formatSessionDate(sessions) {
		let categoryByDate, groupedResult, aggregatedCategories;

		categoryByDate = sessions.map((session) => {
			let stringDate = TimeHelper.formatInputTime(session.startTime);
			return { date: stringDate, videoCategory: session.videoMetadata.videoCategory };
		});
		groupedResult = chain(categoryByDate)
			.groupBy('date')
			.map((value, key) => ({ date: key, videos: value }))
			.value();
		return groupedResult.map((resultGroup) => {
			return { date: resultGroup.date, categoryData: this.AggregateCategoryCounter(resultGroup) };
		});
	}

	static AggregateCategoryCounter(resultGroup) {
		let arr = Array(45).fill(0);
		resultGroup.videos.map((video) => {
			arr[parseInt(video.videoCategory, 10)]++;
		});
		return arr;
	}
}
export default MetricCalculation;
