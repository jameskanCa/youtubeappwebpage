import * as React from 'react';

export default class VideoComponent extends React.Component {
	render() {
		return <iframe width="420" height="345" src={'https://www.youtube.com/embed/' + this.props.videoId} />;
	}
}
