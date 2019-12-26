import * as React from 'react';
import { Table, Tag } from 'antd';
import YoutubeVideoCategorization from '../Utils/YoutubeVideoCategorization';

export default class HistoryTable extends React.Component {
	setSessionDetails(session) {
		this.props.sessionSelection(session);
	}
	render() {
		const columns = [
			{
				title: 'Video Title',
				dataIndex: 'videoTitle',
				key: 'videoTitle'
			},
			{
				title: 'Purpose',
				dataIndex: 'purposeDescription',
				key: 'purposeDescription'
			},
			{
				title: 'Start Time',
				dataIndex: 'startTime',
				key: 'startTime'
			},
			{
				title: 'Category',
				dataIndex: 'videoMetadata.videoCategory',
				key: 'videoMetadata.videoCategory',
				render: (videoMetadata) => (
					<span>
						{videoMetadata ? (
							<Tag
								color={
									YoutubeVideoCategorization.isProcastinationVideo(videoMetadata) ? 'red' : 'green'
								}
								key={videoMetadata}
							>
								{YoutubeVideoCategorization.getYoutubeCategoryText(videoMetadata)}
							</Tag>
						) : null}
					</span>
				)
			},
			{
				title: 'Action',
				key: 'action',
				render: (videoMetadata) => (
					<span>
						<a onClick={() => this.setSessionDetails(videoMetadata)}>Details</a>
					</span>
				)
			}
		];
		return <Table dataSource={this.props.sessions} columns={columns} />;
	}
}
