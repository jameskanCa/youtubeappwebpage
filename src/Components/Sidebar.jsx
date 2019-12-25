import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import { HashRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const { Sider } = Layout;
export default class Sidebar extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <HashRouter>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <HashLink to="/#aboutMe">
                <Icon type="user" />
                <span>Home</span>
              </HashLink>
            </Menu.Item>
          </Menu>
        </HashRouter>
      </Sider>
    );
  }
}
