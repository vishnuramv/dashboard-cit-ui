import React from "react";
import { Menu } from "antd";
import {
  AreaChartOutlined,
  PoweroffOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function SideBar() {
  return (
    <Menu
      style={{ width: 200, height: "100vh" }}
      selectedKeys={["dashboard"]}
      theme="dark"
      mode="vertical"
    >
      <p className="menu__heading">cit chennai</p>
      <Menu.Item key="dashboard" icon={<AreaChartOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="bidding" icon={<MoneyCollectOutlined />}>
        Bidding
      </Menu.Item>
      <Menu.Item key="wallet" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="reports" icon={<PoweroffOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
}
