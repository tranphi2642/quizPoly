/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Contact() {
  return (
    <section className="mt-2">
      <div className="section-header" style={{ paddingLeft: 100 }}>
        <div className="chat-bubble">
          <span className="title">#TAG LIÊN HỆ</span>
          <div
            className="chat-bubble reverse"
            style={{ color: "#27b995" }}
          ></div>
        </div>
      </div>
      <div className="container">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Hãy giữ liên lạc</h3>
            <p className="text">
              Liên hệ với chúng tôi với các chi tiết sau đây và điền vào biểu
              mẫu với các chi tiết.
            </p>
            <div className="info">
              <div className="social-information">
                <i className="fa fa-map-marker"></i>
                <p>TP.HCM</p>
              </div>
              <div className="social-information">
                <i className="fa fa-envelope-o"></i>
                <p>phitmps16509@fpt.edu.vn</p>
              </div>
              <div className="social-information">
                <i className="fa fa-mobile-phone"></i>
                <p>0377166208</p>
              </div>
            </div>
            <div className="social-media">
              <p>Liên hệ với chúng tôi</p>
              <div className="social-icons">
                <Link to="/">
                  <i className="fa fa-facebook-f"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-info-form">
            <span className="circle one"></span>{" "}
            <span className="circle two"></span>
            <form action="#" autoComplete="off">
              <h3 className="title">Liên hệ </h3>
              <div className="social-input-containers1">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Tên tài khoản"
                />
              </div>
              <div className="social-input-containers">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
              </div>
              <div className="social-input-containers">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="social-input-containers textarea">
                <textarea
                  name="message"
                  className="input"
                  placeholder="Lời nhắn"
                ></textarea>
              </div>
              <input type="submit" value="Gửi" className="btn1" />
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.304446915596!2d106.61291731471928!3d10.864432792261871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a172d8c987f%3A0x0!2zMTDCsDUxJzUyLjAiTiAxMDbCsDM2JzU0LjQiRQ!5e0!3m2!1svi!2s!4v1647188028669!5m2!1svi!2s"
          width="425"
          height="520"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
