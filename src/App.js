import React, { Component } from 'react';
import './App.css';
import Panel from './Components/CustomComponents/Panel';
import Sidebar from './Components/Sidebar';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SummaryPanel from './Components/SummaryComponents/SummaryPanel';
import HistoryPanel from './Components/HistoryComponent/HistoryPanel';
import GetUserSessions from './Requests/GetUserSessions';

class App extends Component {
	state = {
		userData: null
	};

	componentDidMount() {
		GetUserSessions.GetUserSessionsData().then((responseJson) => {
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
