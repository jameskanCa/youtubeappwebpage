import * as React from 'react';
import CategorySection from './CategorySection';
import VideoProgressSection from './VideoProgressSection';
import HeaderComponent from '../CustomComponents/HeaderComponent';

export default class SummaryPanel extends React.Component {
	render() {
		return (
			<div>
				<HeaderComponent
					title={'Metric Summary Page'}
					subTitle={'Graphical Displays'}
					text={
						'This page presents calculated statistics of your video watching behaviour on YouTube' +
						'The purpose of this is to provide an insight into how you use YouTube and help make better decisions' +
						'and to turn YouTube into a tool of educational purpose instead of becoming a platform for procastiation. For details ' +
						'regarding metric information, please click on the icon below.'
					}
				/>
				<VideoProgressSection sessions={this.props.sessions} />
				<CategorySection sessions={this.props.sessions} />
			</div>
		);
	}
}
