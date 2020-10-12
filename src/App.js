import React, { Component } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SummaryPanel from "./Components/SummaryComponents/SummaryPanel";
import HistoryPanel from "./Components/HistoryComponent/HistoryPanel";
import { Layout } from "antd";
import { Provider } from "react-redux";
import Reducers from "./Redux/Reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

class App extends Component {
  state = {
    userData: null,
  };

  isUserDataEmpty() {
    return this.state.userData == null;
  }

  render() {
    return (
      <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
        <div className="App">
          <Layout>
            <Router>
              <Sidebar />
              <Layout>
                <Switch>
                  <Route path="/Summary">
                    <SummaryPanel />
                  </Route>
                  <Route path="/History">
                    <HistoryPanel />
                  </Route>
                </Switch>
              </Layout>
            </Router>
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default App;
