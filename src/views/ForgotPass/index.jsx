import React from "react";
import Logo from "../../assets/images/banner/img_avatar2.png";
import { Link } from "react-router-dom";

import "./index.scss";

export default function ForgotPass() {
  return (
    <div className="forgot">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="text-center mt-4 name">Quên mật khẩu </div>
      <form className="p-3 mt-2">
        <div className="form-field d-flex align-items-center">
          <span className="fa fa-user"></span>
          <input
            type="text"
            name="username"
            id="userName"
            placeholder="Tài khoản"
          />
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="fa fa-at"></span>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>

        <button className="btn mt-3">Gửi mã</button>
      </form>
      <div className="text-center fs-6">
        <Link to="/login">Đăng nhập</Link> hoặc
        <Link to="/register"> Đăng ký</Link>
      </div>
    </div>
  );
}
