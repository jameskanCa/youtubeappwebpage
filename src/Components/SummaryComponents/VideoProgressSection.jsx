import * as React from 'react';
import PieGraph from '../Graphs/PieGraph';
import MetricCalculation from '../../Operations/MetricCalculation';
import Panel from '../CustomComponents/Panel';
import TitleComponent from '../CustomComponents/TitleComponent';
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
			<Panel>
				<div
					style={{
						display: 'flex',
						minHeight: 550
					}}
				>
					<Panel>
					<GraphCard>
					<PieGraph data={this.prepareGraphData()} />
					</GraphCard>
						<div style={{ minWidth: 700, height: 500 }}>
							<TitleComponent title={'Video Completion Distribution'} />
							<PieGraph data={this.prepareGraphData()} />
						</div>
					</Panel>
					<Panel>
						<div style={{ minWidth: 700, height: 500 }}>
							<TitleComponent title={'Procastination Video Distribution'} />
							<PieGraph data={this.prepareProcastinationData()} />
						</div>
					</Panel>
				</div>
			</Panel>
		);
	}
}
