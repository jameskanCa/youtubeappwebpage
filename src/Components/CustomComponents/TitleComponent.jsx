import * as React from 'react';

export default class TitleComponent extends React.Component {
	render() {
		return (
			<div style={{fontSize: 20, fontStyle: 'bold'}}>
                {this.props.title}
            </div>
		);
	}
}
