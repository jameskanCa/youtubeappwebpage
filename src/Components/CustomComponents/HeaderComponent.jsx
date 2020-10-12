import { PageHeader, Tag, Typography, Row } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import Panel from "./Panel";
import { LoadSessions } from "../../Redux/ActionCreators";

const IconLink = ({ src, text }) => (
  <a
    style={{
      marginRight: 16,
      display: "flex",
      alignItems: "center",
    }}
  >
    <img
      style={{
        marginRight: 8,
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

class HeaderComponent extends React.Component {
  render() {
    return (
      <Panel>
        <PageHeader
          title={this.props.title}
          style={{
            border: "1px solid rgb(235, 237, 240)",
            padding: 10,
          }}
          subTitle={this.props.subTitle}
          tags={<Tag color="green">Synced</Tag>}
          avatar={{
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=3",
          }}
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
              <div
                onClick={() => {
                  this.props.dispatch(LoadSessions(this.props.userId));
                }}
              >
                <IconLink
                  src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                  text=" Refresh Session Data"
                />
              </div>
            </Row>
          </Content>
        </PageHeader>
      </Panel>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.sessions.userId };
};

export default connect(mapStateToProps)(HeaderComponent);
