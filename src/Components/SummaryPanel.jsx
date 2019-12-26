import * as React from 'react';
import PieGraph from '../Graphs/PieGraph';
import MetricCalculation from '../MetricCalculation';
import PieGraphProcastination from '../Graphs/PieGraphProcastination';

export default class Panel extends React.Component {
	prepareGraphData() {
		let percentageCompleted = MetricCalculation.PercentageVideoCompleted(this.props.sessions);
		MetricCalculation.formatSessionDate(this.props.sessions);
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

	prepareProcastinationData() {
		let procastinationMetric = MetricCalculation.ProcastinationCounter(this.props.sessions);
		const procastinationPercentage = procastinationMetric.procastinationCounter / procastinationMetric.totalVideos;
		const nonProcastinationPercentage =
			procastinationMetric.nonProcastinationCounter / procastinationMetric.totalVideos;
		return [
			{
				id: 'Procastination Videos',
				label: '% Procastiation Videos',
				value: (100 * procastinationPercentage).toFixed(0),
				color: 'hsl(69, 70%, 50%)'
			},
			{
				id: 'NonProcastination Videos',
				label: '% Non-Procastiation Videos',
				value: (100 * nonProcastinationPercentage).toFixed(0),
				color: 'hsl(125, 70%, 50%)'
			}
		];
	}

	render() {
		MetricCalculation.CategoryCounters(this.props.sessions);
		return (
			<React.Fragment>
				<div style={{ display: 'flex' }}>
					<div style={{ width: 1300, height: 500, margin: 50 }}>
						<PieGraph data={this.prepareGraphData()} />
					</div>
					<div style={{ width: 1300, height: 500, margin: 50 }}>
						<PieGraphProcastination data={this.prepareProcastinationData()} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
