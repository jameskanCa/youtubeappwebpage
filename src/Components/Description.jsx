import * as React from 'react';
import * as moment from 'moment';
import { Layout, Descriptions, Badge } from 'antd';

export default class Description extends React.Component {
	formatSecondsToMinutes(duration) {
		const durationSeconds = this.obtainDurationSeconds(duration);
		const seconds = durationSeconds % 60;
		const minutes = Math.trunc(durationSeconds / 60);
		return `${minutes} Minutes ${seconds} Seconds`;
    }
    
    obtainDurationSeconds(time) {
		const readableDuration = moment.duration(time, moment.ISO_8601);
		return readableDuration.asSeconds();
	}

	render() {
		let session = this.props.session;
		if (session == null) {
			return null;
		}
        console.log(session.finishedVideo);
		return (
			<Descriptions title="User Info" layout="vertical" bordered>
				<Descriptions.Item label="Title">{session.videoTitle}</Descriptions.Item>
				<Descriptions.Item label="Video Duration">
					{session.videoMetadata ? this.formatSecondsToMinutes(session.videoMetadata.videoDuration) : 'N/A'}
				</Descriptions.Item>
				<Descriptions.Item label="Video Finish Status">{session.finishedVideo? 'Yes' : 'No'}</Descriptions.Item>
				<Descriptions.Item label="Start Time">{session.startTime}</Descriptions.Item>
				<Descriptions.Item label="End Time" span={1}>
					{session.endTime}
				</Descriptions.Item>
				<Descriptions.Item label="Purpose Description" span={3}>
					{session.purposeDescription}
				</Descriptions.Item>
				<Descriptions.Item label="Video Description">
					{session.videoMetadata ? session.videoMetadata.videoDescription : 'N/A'}
				</Descriptions.Item>
			</Descriptions>
		);
	}
}
