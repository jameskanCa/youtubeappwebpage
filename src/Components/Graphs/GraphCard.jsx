import * as React from 'react';
import { Card } from 'antd';

export default class GraphCard extends React.Component {
	render() {
		return (
			<Card
				title={this.props.title}
				size={'default'}
				style={{ flexGrow: 1, margin: 10, marginBottom: 0 }}
				bodyStyle={{
					width: '100%',
					height: 600
				}}
			>
				{this.props.children}
			</Card>
		);
	}
}
