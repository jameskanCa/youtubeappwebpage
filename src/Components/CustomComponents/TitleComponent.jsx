import * as React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export default class TitleComponent extends React.Component {
	render() {
		return <Title level={3}>{this.props.title}</Title>;
	}
}
