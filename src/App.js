import React, { Component } from 'react';
import './App.css';
import Panel from './Components/Panel';
import Sidebar from './Components/Sidebar';
import { Layout } from 'antd';
const { Content } = Layout;

class App extends Component {
	state = {
		userData: null
	};

	componentDidMount() {
		// Development Mode
		fetch('http://localhost:3001/getUserSessions/113340512880134517454')
			.then(function(response) {
				return response.json();
			})
			.then((responseJson) => {
				this.setState({ userData: responseJson });
			});
	}

	isUserDataEmpty() {
		return this.state.userData == null;
	}

	render() {
		return (
			<div className="App">
				<Layout>
					<Sidebar />
					<Layout style={{ marginLeft: 110 }}>
						<Content style={{ overflow: 'initial' }}>
							<Layout>
								<Panel sessions={this.isUserDataEmpty() ? [] : this.state.userData.session.reverse()} />
							</Layout>
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default App;
