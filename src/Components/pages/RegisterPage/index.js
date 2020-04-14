import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../../atom/Loading";
import { Link } from "react-router-dom";
import * as helper from "../../../Utils/StorageToken";
import { Form, Input, Button, Checkbox } from "antd";
import IconLogo from "../../../Assets/images/boat-image.jpg";

const RegisterPage = () => {
  const history = useHistory()
  const onFinish = values => {
    if (values) {
      console.log('values' ,values);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-container-logo">
          <div className="login-container-image">
            <img src={IconLogo} alt="" />
          </div>
          <h1>Don't have any account ?</h1>
        </div>
        <div className="login-container-form">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[
                { required: true, message: "Please input your fullname!" }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
                { type: "email", message: "Your email is invalid" }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <div className="login-button-container">
                <Button type="primary" htmlType="submit" id="submit-button">
                  Submit
                </Button>
                <Button type="primary" onClick={() => history.push('/login')}>Sign in</Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/* <Loading loading={loading} /> */}
    </>
  );
};

RegisterPage.propTypes = {
  authLogin: PropTypes.func
};

export default RegisterPage;
