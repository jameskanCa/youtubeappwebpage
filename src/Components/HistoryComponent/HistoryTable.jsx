import * as React from "react";
import { Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import YoutubeVideoCategorization from "../../Utils/YoutubeVideoCategorization";
import { DeleteSession } from "../../Redux/ActionCreators/index";
import { connect } from "react-redux";

class HistoryTable extends React.Component {
  setSessionDetails(session) {
    this.props.sessionSelection(session);
  }

  render() {
    const columns = [
      {
        title: "Video Title",
        dataIndex: "videoTitle",
        key: "videoTitle",
      },
      {
        title: "Purpose",
        dataIndex: "purposeDescription",
        key: "purposeDescription",
      },
      {
        title: "Start Time",
        dataIndex: "startTime",
        key: "startTime",
      },
      {
        title: "Category",
        dataIndex: "videoMetadata.videoCategory",
        key: "videoMetadata.videoCategory",
        render: (videoMetadata) => (
          <span>
            {videoMetadata ? (
              <Tag
                color={
                  YoutubeVideoCategorization.isProcastinationVideo(
                    videoMetadata
                  )
                    ? "red"
                    : "green"
                }
                key={videoMetadata}
              >
                {YoutubeVideoCategorization.getYoutubeCategoryText(
                  videoMetadata
                )}
              </Tag>
            ) : null}
          </span>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (videoMetadata) => (
          <span>
            <a onClick={() => this.setSessionDetails(videoMetadata)}>Details</a>
          </span>
        ),
      },
      {
        title: "Delete",
        key: "delete",
        render: (videoMetadata) => (
          <div
            onClick={() => {
              this.props.dispatch(
                DeleteSession(videoMetadata._id, this.props.userId)
              );
            }}
          >
            <DeleteOutlined />
          </div>
        ),
      },
    ];
    return <Table dataSource={this.props.sessions} columns={columns} />;
  }
}

const mapStateToProps = (state) => {
  return { userId: state.sessions.userId };
};

export default connect(mapStateToProps)(HistoryTable);
