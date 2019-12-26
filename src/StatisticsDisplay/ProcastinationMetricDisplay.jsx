import { Statistic, Row, Col } from 'antd';
import * as React from 'react';

export default class ProcastinationMetricDisplay extends React.Component {
	render() {
		return (
			<Row gutter={16}>
				{this.props.metrics.map((metric) => {
					return (
						<Col span={12}>
							<Statistic title={metric.text} value={metric.value} />
						</Col>
					);
				})}
			</Row>
		);
	}
}
