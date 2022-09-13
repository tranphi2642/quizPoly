import React from "react";
import python from "../../assets/images/banner/python.webp";
import web from "../../assets/images/banner/web.png";
import js from "../../assets/images/banner/js.png";
import banner from "../../assets/images/banner/bannerGT.png";
import tutor from "../../assets/images/banner/tutor.jpg";

export default function Introduce() {
  return (
    <React.Fragment>
      <div className="row">
        <img
          src={tutor}
          alt=""
          className="img-fluid pe-0 ps-0"
          style={{ objectFit: "cover" }}
        />
      </div>

      <section className=" mt-2">
        <div className="section-header ms-5">
          <div className="chat-bubble">
            <span className="title">#TAG GIỚI THIỆU VỀ WEBSITE THI ONLINE</span>
            <div
              className="chat-bubble reverse"
              style={{ color: "#27b995" }}
            ></div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
              <div
                className="row h-100 p-5 border rounded-3"
                style={{ backgroundColor: "rgb(255, 227, 186)" }}
              >
                <div className="col-sm-8 ">
                  <button
                    className="btn btn-danger mb-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Mới nhất
                  </button>
                  <h2 className="h1 ">
                    WEBSITE EXAM MULTIPLE-CHOICES ONLINE 2022
                  </h2>
                  <span className="h4">
                    Đây là một trang web thi trắc nghiệm trực tuyến giành cho
                    các bạn sinh viên trường CĐ PFT Polytechnic. Đây không chỉ
                    là web thi mà còn là kho tài liệu các môn học ở trường gồm
                    các kiến thức từ cơ bản đến nâng cao. Ngoài ra trang web còn
                    hỗ trợ giải đáp thắc mắc các môn học cho các bạn sinh viên.
                  </span>
                  <button
                    className="btn btn-lg mt-5 text-white"
                    style={{ backgroundColor: "rgb(102,51,204)" }}
                  >
                    Thông tin thêm
                  </button>
                </div>
                <div className="col-sm-4 ps-5 text-center">
                  <img
                    src={banner}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="row h-100 p-2 rounded-3 me-2"
                style={{ backgroundColor: "rgb(112, 117, 248)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <h4 className="text-white ">Cuộc thi Coder tranh đấu</h4>
                  <button className="btn mt-3  btn-outline-light  ">
                    Đăng ký ngay
                  </button>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={python}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="row h-100 p-2  border rounded-3 me-1 ms-1"
                style={{ backgroundColor: "rgb(252, 121, 70)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <h4 className="text-white ">Cuộc thi các môn học</h4>
                  <button className="btn mt-3  btn-outline-light  ">
                    Đăng ký ngay
                  </button>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={web}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="row h-100 p-2 border rounded-3 ms-2"
                style={{ backgroundColor: "rgb(3, 181, 142)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <h4 className="text-white ">Cuộc thi giải thuật </h4>
                  <button className="btn mt-3 btn-outline-light  ">
                    Đăng ký ngay
                  </button>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={js}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
