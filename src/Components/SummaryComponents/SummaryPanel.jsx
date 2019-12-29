import * as React from 'react';
import CategorySection from './CategorySection';
import VideoProgressSection from './VideoProgressSection';

export default class SummaryPanel extends React.Component {
	render() {
		return (
			<div style={{ marginLeft: 80 }}>
				<VideoProgressSection sessions={this.props.sessions} />
				<CategorySection sessions={this.props.sessions} />
			</div>
		);
	}
}
