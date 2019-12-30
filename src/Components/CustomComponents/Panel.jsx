import * as React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
export default class Panel extends React.Component {
	render() {
		return (
			<Layout>
				<Content
					style={{
						overflow: 'initial',
						padding: 10
					}}
				>
					<div
						style={{
							background: '#fff',
							position: 'relative',
							minHeight: '100%'
						}}
					>
						{this.props.children}
					</div>
				</Content>
			</Layout>
		);
	}
}
