import * as React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
export default class Panel extends React.Component {
	render() {
		return (
			<Layout style={{ marginLeft: 90 }}>
						<Content style={{ overflow: 'initial' }}>
							<div style={{ background: '#fff', minHeight: 360 }}>{this.props.children}</div>
					
				</Content>
			</Layout>
		);
	}
}
