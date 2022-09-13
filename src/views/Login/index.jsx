import React from "react";
import Logo from "../../assets/images/banner/img_avatar2.png";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="text-center mt-4 name">Đăng nhập tài khoản </div>
      <form className="p-3 mt-2">
        <div className="form-field d-flex align-items-center">
          <span className="fa fa-user"></span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Tài khoản"
          />
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="fa fa-key"></span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mật khẩu"
          />
        </div>

        <button className="btn mt-3">Đăng nhập</button>
      </form>
      <div className="text-center fs-6">
        <Link to="/">Quên mật khẩu?</Link> hoặc
        <Link to="/"> Đăng ký</Link>
      </div>
    </div>
  );
}
