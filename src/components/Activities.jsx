import { Comment } from "antd";
import React from "react";

export default function Activities() {
  return (
    <div className="activities__container">
      <p>Recent Activities</p>
      <div className="px-4">
        <Comment
          className="activity__item"
          author={<p className="activity__heading">today</p>}
          content="Report Downloaded"
        />
        <Comment
          className="activity__item"
          author={<p className="activity__heading">yesterday</p>}
          content="Report Deleted"
        />
        <Comment
          className="activity__item"
          author={<p className="activity__heading">2 days ago</p>}
          content="Username Changed"
        />
        <Comment
          className="activity__item"
          author={<p className="activity__heading">1 month ago</p>}
          content="Password Changed"
        />
      </div>
    </div>
  );
}
