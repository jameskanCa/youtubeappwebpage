import * as React from 'react';
import HistoryTable from './HistoryTable';
import Description from './Description';
import VideoComponent from '../CustomComponents/VideoComponent';
export default class HistoryPanel extends React.Component {
	state = {
		selectedSession: null
	};

	selectedSession = (session) => {
		this.setState({ selectedSession: session });
	};

	render() {
		return (
			<div style={{ marginLeft: 100 }}>
				<div >
					{this.state.selectedSession ? (
						<VideoComponent videoId={this.state.selectedSession.videoId} />
					) : null}
				</div>
				<div>
					<Description session={this.state.selectedSession} />
				</div>
				<div >
					<HistoryTable sessions={this.props.sessions} sessionSelection={this.selectedSession} />
				</div>
			</div>
		);
	}
}
