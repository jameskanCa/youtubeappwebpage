import * as React from 'react';
import { Layout , Divider } from 'antd';
import HistoryTable from './HistoryTable';
import PieGraph from '../Graphs/PieGraph';
import MetricCalculation from '../MetricCalculation';
import Description from './Description';

const { Content } = Layout;
export default class Panel extends React.Component {
	state = {
		selectedSession: () => {}
	};

	selectedSession = (session) => {
		this.setState({ selectedSession: session });
	};

	prepareGraphData() {
		let percentageCompleted = MetricCalculation.PercentageVideoCompleted(this.props.sessions);
		return [
			{
				id: 'Completed Videos',
				label: '% Completed Videos',
				value: (100 * percentageCompleted).toFixed(0),
				color: 'hsl(69, 70%, 50%)'
			},
			{
				id: 'Incomplete Videos',
				label: '% Incomplete Videos',
				value: (100 * (1 - percentageCompleted)).toFixed(0),
				color: 'hsl(125, 70%, 50%)'
			}
		];
	}

	render() {
		return (
			<Content style={{ margin: '0 16px' }}>
				<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
					<div style={{ width: 1300, maxHeight: 1000, margin: 50 }}>
						<Description session={this.state.selectedSession} />
					</div>
					<Divider></Divider>
					<div style={{ width: 1300, maxHeight: 1000, margin: 50 }}>
						<HistoryTable sessions={this.props.sessions} sessionSelection={this.selectedSession} />
					</div>
					<div style={{ width: 700, height: 500, margin: 50 }}>
						<PieGraph data={this.prepareGraphData()} />
					</div>
				</div>
			</Content>
		);
	}
}
