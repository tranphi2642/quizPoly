import React from "react";
import Logo from "../../assets/images/banner/img_avatar2.png";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Register() {
  return (
    <div className="signup">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="text-center mt-4 name">Đăng ký tài khoản </div>
      <div className="row">
        <form className="p-3 mt-2" name="signup">
          <div className="row p-2">
            <div className="form-field d-flex align-items-center col-sm-5 ">
              <span className="fa fa-user"></span>
              <input
                type="text"
                name="username"
                id="userName"
                placeholder="Tài khoản"
              />
            </div>

            <div className="col-sm-2"></div>

            <div className="form-field d-flex align-items-center col-sm-5 ">
              <span className="fa fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          <div className="form-field d-flex align-items-center">
            <span className="fa fa-user-circle"></span>
            <input
              type="text"
              name="fullname"
              id="hoten"
              placeholder="Họ tên"
            />
          </div>

          <div className="form-field d-flex align-items-center">
            <span className="fa fa-at"></span>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className="row p-3">
            <div className="form-check col-sm-6">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Nam"
                id="flexRadioDefault1"
                defaultChecked={true}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                <span className="fa fa-mars" style={{ fontSize: 20 }}>
                  Nam
                </span>
              </label>
            </div>

            <div className="form-check col-sm-6">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Nữ"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <span className="fa fa-venus" style={{ fontSize: 20 }}>
                  Nữ
                </span>
              </label>
            </div>
          </div>

          <div className="form-field d-flex align-items-center">
            <span className="fa fa-calendar"></span>
            <input
              type="text"
              name="birthday"
              id="date"
              placeholder="Ngày sinh"
            />
          </div>

          <div className="row p-2">
            <div className="form-field d-flex align-items-center col-sm-5">
              <span className="fa fa-money"></span>
              <input
                type="number"
                name="schoolfree"
                min="0"
                id="schoolfree"
                placeholder="Học phí"
              />
            </div>

            <div className="col-sm-2"></div>

            <div className="form-field d-flex align-items-center col-sm-5">
              <span className="fa fa-hand-pointer-o"></span>
              <input
                type="number"
                name="marks"
                min="0"
                max="10"
                id="marks"
                placeholder="Điểm"
              />
            </div>
          </div>
          <button className="btn mt-3">Đăng ký</button>
        </form>
        <div className="text-center fs-6">
          <Link to="/">Quên mật khẩu?</Link> hoặc
          <Link to="/login"> Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
}
