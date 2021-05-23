import {
  DownloadOutlined,
  MailOutlined,
  MoneyCollectOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

export default function Cards() {
  return (
    <div className="card__container">
      <Card hoverable className="card__item">
        <p>MW Consumed</p>
        <div>
          <ThunderboltOutlined style={{ fontSize: 45 }} />
          <h1>47</h1>
        </div>
        <p className="grey">MW</p>
      </Card>
      <Card hoverable className="card__item">
        <p>Notifications</p>
        <div>
          <MailOutlined style={{ fontSize: 45 }} />
          <h1>12</h1>
        </div>
        <p className="grey">messages</p>
      </Card>
      <Card hoverable className="card__item">
        <p>Wallet Balance</p>
        <div>
          <MoneyCollectOutlined style={{ fontSize: 45 }} />
          <h1>07</h1>
        </div>
        <p className="grey">Rs</p>
      </Card>
      <Card hoverable className="card__item">
        <p>Download</p>
        <DownloadOutlined style={{ fontSize: 45 }} />
      </Card>
    </div>
  );
}
