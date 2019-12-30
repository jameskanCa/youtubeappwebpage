import { PageHeader, Button, Tag, Typography, Row } from 'antd';
import * as React from 'react';
import Panel from './Panel';

const IconLink = ({ src, text }) => (
	<a
		style={{
			marginRight: 16,
			display: 'flex',
			alignItems: 'center'
		}}
	>
		<img
			style={{
				marginRight: 8
			}}
			src={src}
			alt="start"
		/>
		{text}
	</a>
);

const Content = ({ children, extraContent }) => {
	return (
		<Row className="content" type="flex">
			<div className="main" style={{ flex: 1 }}>
				{children}
			</div>
			<div className="extra">{extraContent}</div>
		</Row>
	);
};

const { Paragraph } = Typography;

export default class HeaderComponent extends React.Component {
	render() {
		return (
			<Panel>
				<PageHeader
					title={this.props.title}
					style={{
						border: '1px solid rgb(235, 237, 240)',
						padding: 10
					}}
					subTitle={this.props.subTitle}
					tags={<Tag color="green">Synced</Tag>}
					avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=3' }}
				>
					<Content
						extraContent={
							<img
								src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
								alt="content"
							/>
						}
					>
						<Paragraph>{this.props.text}</Paragraph>
						<Row className="contentLink" type="flex">
							<IconLink
								src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
								text=" Page Info Details"
							/>
						</Row>
					</Content>
				</PageHeader>
			</Panel>
		);
	}
}
