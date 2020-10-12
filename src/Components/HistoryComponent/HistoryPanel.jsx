import * as React from "react";
import { Button } from "antd";
import HistoryTable from "./HistoryTable";
import Description from "./Description";
import VideoComponent from "../CustomComponents/VideoComponent";
import Panel from "../CustomComponents/Panel";
import HeaderComponent from "../CustomComponents/HeaderComponent";
import { connect } from "react-redux";
import { LoadSessions } from "../../Redux/ActionCreators";

class HistoryPanel extends React.Component {
  state = {
    selectedSession: null,
  };

  componentDidMount() {
    this.props.dispatch(LoadSessions(this.props.userId));
  }

  selectedSession = (session) => {
    this.setState({ selectedSession: session });
  };

  clearSelection = () => {
    this.setState({ selectedSession: null });
  };

  render() {
    return (
      <div>
        <Panel>
          <HeaderComponent
            title={"History"}
            subtitle={"Video History"}
            text={
              "This page holds information regarding your watch history and any notes you may have taken at the start of the video." +
              "The purpose of this page is to allow you to revisit any prior videos you may have watched and also obtain notes and additional data of the video." +
              "By selecting details, information about the video and the video itself will be visible as well as any notes you may have written before starting the video."
            }
          />
          {this.state.selectedSession ? (
            <div>
              <VideoComponent videoId={this.state.selectedSession.videoId} />
              <Description session={this.state.selectedSession} />{" "}
              <div style={{ padding: 10 }}>
                <Button
                  onClick={() => {
                    this.clearSelection();
                  }}
                >
                  Unselect Session
                </Button>
              </div>
            </div>
          ) : null}
        </Panel>
        <Panel>
          <HistoryTable
            sessions={this.props.sessions}
            sessionSelection={this.selectedSession}
          />
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { sessions: state.sessions.sessions, userId: state.sessions.userId };
};

export default connect(mapStateToProps)(HistoryPanel);
