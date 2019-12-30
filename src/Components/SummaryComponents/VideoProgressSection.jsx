import * as React from 'react';
import PieGraph from '../Graphs/PieGraph';
import MetricCalculation from '../../Operations/MetricCalculation';
import GraphCard from '../Graphs/GraphCard';

export default class VideoProgressSection extends React.Component {
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
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					minHeight: 550
				}}
			>
				<GraphCard title={'Video Completion Distribution'}>
					<PieGraph data={this.prepareGraphData()} />
				</GraphCard>
				<GraphCard title={'Procastination Video Distribution'}>
					<PieGraph data={this.prepareProcastinationData()} />
				</GraphCard>
			</div>
		);
	}
}
