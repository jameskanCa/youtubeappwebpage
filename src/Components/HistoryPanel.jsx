import * as React from 'react';
import HistoryTable from './HistoryTable';
import MetricCalculation from '../MetricCalculation';
import Description from './Description';
import VideoComponent from './VideoComponent';

export default class Panel extends React.Component {
	state = {
		selectedSession: null
	};

	selectedSession = (session) => {
		this.setState({ selectedSession: session });
	};

	render() {
		MetricCalculation.CategoryCounters(this.props.sessions);
		return (
			<React.Fragment>
				<div>
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
			</React.Fragment>
		);
	}
}
