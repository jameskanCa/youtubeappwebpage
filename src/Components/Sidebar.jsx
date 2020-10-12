import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
export default class Sidebar extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        style={{
          position: "relative",
          minHeight: "100vh",
        }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Link to="/Summary">
              <Icon type="home" />
              <span>Summary</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/History">
              <Icon type="history" />
              <span>History</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
