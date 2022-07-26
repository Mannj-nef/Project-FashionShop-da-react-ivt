/* eslint-disable jsx-a11y/alt-text */
import { Form, Input, Tabs } from "antd";
import React from "react";
import { config } from "../../../common/table";

import "../style.scss";
export default function Profile() {
  const { TabPane } = Tabs;

  return (
    <div className="row">
      <div className="col-lg-4 col-xlg-3 col-md-5">
        <div className="card">
          <div className="card-body">
            <center className="mt-4">
              <img
                src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-edit-profile-icon-png-image_313044.jpg"
                className="rounded-circle"
                width="150"
              />
              <h4 className="card-title mt-4">HuyGT</h4>
              <h6 className="card-subtitle">Admin là ai mà biết</h6>
              <div className="row text-center justify-content-center">
                <div className="col-4">
                  <i className="fa-solid fa-signs-post mr-2"></i>
                  <span>169</span>
                </div>
                <div className="col-4">
                  <i className="fa-solid fa-comment mr-2"></i>
                  <span>69</span>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-xlg-9 col-md-7">
        <div className="card">
          <div className="card-body">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Profile" key="1">
                <Form layout="vertical">
                  <Form.Item
                    label="Email"
                    name={["email"]}
                    rules={[...config.ruleEmail]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Full Name"
                    name={["fullName"]}
                    rules={[...config.ruleFullName]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Address"
                    name={["address"]}
                    rules={[...config.ruleAddress]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Avatar" name={["avatar"]}>
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <button className="btn btn-primary" htmlType="submit">
                      Update
                    </button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Change Password" key="2">
                <Form layout="vertical">
                  <Form.Item
                    label="Current Password"
                    name="password"
                    rules={[...config.rulePassword]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[...config.rulePassword]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[...config.rulePassword]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                    <button className="btn btn-primary" htmlType="submit">
                      Change
                    </button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
