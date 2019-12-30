import * as React from 'react';
import { Card } from 'antd';

export default class GraphCard extends React.Component {
	render() {
		return (
			<Card title={this.props.title} style={{  minWidth: 700, height: 500 }}>
				{this.props.children}
			</Card>
		);
	}
}
