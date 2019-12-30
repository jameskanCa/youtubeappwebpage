import * as React from 'react';
import HistoryTable from './HistoryTable';
import Description from './Description';
import VideoComponent from '../CustomComponents/VideoComponent';
import Panel from '../CustomComponents/Panel';
import HeaderComponent from '../CustomComponents/HeaderComponent';

export default class HistoryPanel extends React.Component {
	state = {
		selectedSession: null
	};

	selectedSession = (session) => {
		this.setState({ selectedSession: session });
	};

	render() {
		return (
			<div>
				<Panel>
					<HeaderComponent
						title={'History'}
						subtitle={'Video History'}
						text={
							'This page holds information regarding your watch history and any notes you may have taken at the start of the video.' +
							'The purpose of this page is to allow you to revisit any prior videos you may have watched and also obtain notes and additional data of the video.' +
							'By selecting details, information about the video and the video itself will be visible as well as any notes you may have written before starting the video.'
						}
					/>
					{this.state.selectedSession ? (
						<VideoComponent videoId={this.state.selectedSession.videoId} />
					) : null}
					<Description session={this.state.selectedSession} />
				</Panel>
				<Panel>
					<HistoryTable sessions={this.props.sessions} sessionSelection={this.selectedSession} />
				</Panel>
			</div>
		);
	}
}
