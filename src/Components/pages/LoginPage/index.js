import "./styles.scss";
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import Loading from '../../atom/Loading';
import { Link } from "react-router-dom";
import * as helper from '../../../Utils/StorageToken'
import { Form, Input, Button, Checkbox } from "antd";
import IconLogo from "../../../Assets/images/boat-image.jpg";


const LoginPage = ({loading, authLogin, authToken}) => {
  const history = useHistory()
  const [valueLogin, setValueLogin] = useState(false)
  const onFinish = values => {
    if(values){
      authLogin({email: values.username, password: values.password})
      setValueLogin(values.remember)
      setTimeout(() => {
        history.push('/travel-list')
      }, 2500)
    }
  };

  return (
    <>
    <div className="login-container">
      <div className="login-container-logo">
        <div className="login-container-image">
          <img src={IconLogo} alt="" />
        </div>
        <h1>Travel Exploration</h1>
      </div>
      <div className="login-container-form">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
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
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="/forgot-password" style={{color: '#2bb673'}}>Forgot Password</Link>
          </Form.Item>
          <Form.Item>
            <div className="login-button-container">
              <Button type="primary" htmlType="submit" id='submit-button'>
                Submit
              </Button>
              <Button type="primary" onClick={() => {history.push('/register')}}>Register</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
    <Loading loading={loading}/>
    </>
  );
};

LoginPage.propTypes = {
  authLogin: PropTypes.func,
};

export default LoginPage;
