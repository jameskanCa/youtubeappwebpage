import * as React from 'react';
import TimeHelper from '../../Utils/TimeHelper';
import { Descriptions } from 'antd';

export default class Description extends React.Component {
	render() {
		let session = this.props.session;
		if (session == null) {
			return null;
		}
		return (
			<Descriptions title="Video Detail" layout="vertical" bordered>
				<Descriptions.Item label="Title">{session.videoTitle}</Descriptions.Item>
				<Descriptions.Item label="Video Duration">
					{session.videoMetadata ? (
						TimeHelper.formatSecondsToMinutes(session.videoMetadata.videoDuration)
					) : (
						'N/A'
					)}
				</Descriptions.Item>
				<Descriptions.Item label="Video Finish Status">
					{session.finishedVideo ? 'Yes' : 'No'}
				</Descriptions.Item>
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
