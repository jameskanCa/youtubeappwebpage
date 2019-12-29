import React, { Component } from 'react';
import './App.css';
import Panel from './Components/CustomComponents/Panel';
import Sidebar from './Components/Sidebar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SummaryPanel from './Components/SummaryComponents/SummaryPanel';
import HistoryPanel from './Components/HistoryComponent/HistoryPanel';

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
				<Router>
					<Sidebar />
					<Panel>
						<Switch>
							<Route path="/Summary">
								<SummaryPanel
									sessions={this.isUserDataEmpty() ? [] : this.state.userData.session.reverse()}
								/>
							</Route>
							<Route path="/History">
								<HistoryPanel sessions={this.isUserDataEmpty() ? [] : this.state.userData.session} />
							</Route>
						</Switch>
					</Panel>
				</Router>
			</div>
		);
	}
}

export default App;
