import React from "react";
import course1 from "../../assets/images/banner/course1.png";
import course2 from "../../assets/images/banner/course2.png";
import course3 from "../../assets/images/banner/course3.png";
import course4 from "../../assets/images/banner/course4.png";
import golang from "../../assets/images/banner/golang.webp";
import python from "../../assets/images/banner/python.webp";
import web from "../../assets/images/banner/web.png";
import banner from "../../assets/images/banner/js.png";
import bannerGT from "../../assets/images/banner/bannerGT.png";
import react from "../../assets/images/icons/react.png";
import java from "../../assets/images/icons/java.png";
import aws from "../../assets/images/icons/aws.png";
import devops from "../../assets/images/banner/devops.webp";
import kubernetes from "../../assets/images/banner/kubernetes.webp";
import linuxBlog from "../../assets/images/banner/linux-blog.webp";
import exam from "../../assets/images/banner/exam.png";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <div
          className="row ps-5"
          style={{
            backgroundColor: "rgba(210, 207, 207, 0.978)",
            height: 655,
            paddingTop: 170,
          }}
        >
          <div className="col-6 col-sm-8 col-md-6 col-lg-6">
            <h1 className="mb-5">KHÓA HỌC ONLINE</h1>
            <span>
              Khóa học chất lượng cao với giá cả phải chăng. Chúng tôi là công
              nghệ mới nhất và chất lượng cao nhất.
            </span>
            <span>
              <strong>Được rất nhiều sinh viên </strong>chuyên gia tin cậy .
            </span>
            <div className="search" style={{ marginTop: 50 }}>
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Bạn tìm kiếm khóa học nào"
              />
              <button className="btn btn-dark">
                <i className="fa fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-6 col-lg-6 text-center">
            <img
              className="img-fluid"
              src={course1}
              alt=""
              style={{ width: "80%", height: "75%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <article>
        <div className="home p-5">
          <div className="row mt-3 p-5 ms-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
              <div
                className="row h-100 p-5 border rounded-3"
                style={{ backgroundColor: "rgb(255,198,112)" }}
              >
                <div className="col-sm-7 ">
                  <button
                    className="btn btn-danger mb-3"
                    style={{ borderRadius: 30 }}
                  >
                    Xu hướng
                  </button>
                  <h2 className="h1 font-weight-bold">
                    Tìm hiểu Golang và xây dựng các API REST với MongoDB
                  </h2>
                  <span>
                    Một hướng dẫn đầy đủ để hiểu golang và thành thạo nó.
                  </span>
                  <button
                    className="btn btn-lg mt-5 text-white"
                    style={{ backgroundColor: "rgb(102,51,204)" }}
                  >
                    Đăng ký miễn phí
                  </button>
                </div>
                <div className="col-sm-5 ps-5 text-center">
                  <img
                    src={golang}
                    alt=""
                    style={{ width: "70%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 ">
              <div
                className="row h-100 p-2 rounded-3 me-2"
                style={{ backgroundColor: "rgba(45, 51, 235, 0.822)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <h4 className="text-white ">Tìm hiểu khóa học Python</h4>
                  <button className="btn mt-3  btn-outline-light  ">
                    Đăng ký ngay
                  </button>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={python}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="row h-100 p-2  border rounded-3 me-1 ms-1"
                style={{ backgroundColor: "rgba(216, 81, 28, 0.873)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <h4 className="text-white ">Phát triển web hiện đại</h4>
                  <button className="btn mt-3 btn-outline-light ">
                    Đăng ký ngay
                  </button>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={web}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="row h-100 p-2 border rounded-3 ms-2"
                style={{ backgroundColor: "rgb(0,198,154)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <h4 className="text-white ">Tìm hiểu khóa học JavaScript</h4>
                  <button className="btn mt-3 btn-outline-light  ">
                    Đăng ký ngay
                  </button>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={banner}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 p-5 ms-5">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card bg-ligth">
                    <div className="card-body">
                      <h5 className="card-title text-info">Chủ đề</h5>
                      <p className="card-text ">
                        <strong>Full Stack web Developer Django </strong>
                      </p>
                      <p className="card-text">
                        Tham gia khóa học để giành được phần thưởng lớn.
                      </p>
                      <div>
                        <button className="btn btn-outline-dark ">
                          Đăng ký ngay
                        </button>
                        <img
                          className="float-end"
                          src={python}
                          alt=""
                          style={{
                            width: "18%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-ligth">
                    <div className="card-body">
                      <h5 className="card-title text-info">Chủ đề</h5>
                      <p className="card-text ">
                        <strong>Pro Front End Developer - React</strong>
                      </p>
                      <p className="card-text">
                        Tham gia khóa học để giành được phần thưởng lớn.
                      </p>
                      <div>
                        <button className="btn btn-outline-dark ">
                          Đăng ký ngay
                        </button>
                        <img
                          className="float-end"
                          src={react}
                          alt=""
                          style={{
                            width: "18%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-ligth">
                    <div className="card-body">
                      <h5 className="card-title text-info">Chủ đề</h5>
                      <p className="card-text ">
                        <strong>Android P and JAVA Bundle</strong>
                      </p>
                      <p className="card-text">
                        Tham gia khóa học để giành được phần thưởng lớn.
                      </p>
                      <div>
                        <button className="btn btn-outline-dark ">
                          Đăng ký ngay
                        </button>
                        <img
                          className="float-end"
                          src={java}
                          alt=""
                          style={{
                            width: "18%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-ligth">
                    <div className="card-body">
                      <h5 className="card-title text-info">Chủ đề</h5>
                      <p className="card-text">
                        <strong>AWS Serverless </strong>
                      </p>
                      <p className="card-text">
                        Tham gia khóa học để giành được phần thưởng lớn.
                      </p>
                      <div className="pt-2">
                        <button className="btn btn-outline-dark ">
                          Đăng ký ngay
                        </button>
                        <img
                          className="float-end "
                          src={aws}
                          alt=""
                          style={{
                            width: "18%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 p-4 ">
              <h5 className=" text-info">Các chủ đề phổ biến hiện nay</h5>
              <h2 className="h1">
                <strong>Không biết bắt đầu từ đâu?</strong>
              </h2>
              <h5
                className="h4 mt-3 "
                style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
              >
                Bạn có thể nhầm lẫn khi mới bắt đầu. Công nghệ rất rộng lớn
                nhưng đừng lo lắng. Các gói được sắp xếp của chúng tôi sẽ hoạt
                động như một lộ trình học tập có hướng dẫn. Xem tất cả các gói
                của chúng tôi và bắt đầu hành trình lập trình của bạn với chúng
                tôi.
              </h5>

              <button className=" btn btn-lg btn-secondary mt-3">
                Xem thêm
              </button>
            </div>
          </div>

          <div className="row mt-3 p-5 ms-5">
            <div className="col-6 col-sm-8 col-lg-6 p-4 ">
              <h5 className=" text-info">Tạo sao lại chọn lập trình</h5>
              <h2 className="h1">
                <strong>Không biết bắt đầu từ đâu?</strong>
              </h2>
              <div
                className="accordion accordion-flus  mt-5"
                id="accordionFlushExample"
              >
                <div className="accordion-item ">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Chất lượng cao nhất
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
                    >
                      Ở đây, chúng tôi rất coi trọng chất lượng. Mỗi video được
                      sản xuất với chất lượng cao nhất về âm thanh, video và nội
                      dung. Chúng tôi là điểm chuẩn về tiêu chuẩn chất lượng.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Công nghệ mới nhất
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
                    >
                      Đây là nơi sản xuất các khóa học về công nghệ mới nhất.
                      Không chỉ công nghệ mới nhất, chúng tôi sửa đổi các khóa
                      học này theo thời gian. Chúng tôi không hỗ trợ ban nhạc
                      cho các khóa học hiện có, khi các khóa học có vẻ lỗi thời,
                      chúng tôi triển khai các khóa học mới.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Giảng dạy chuyên môn
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
                    >
                      Biết công nghệ và dạy công nghệ là hai việc khác nhau.
                      Chúng tôi có chuyên môn trong cả hai phân khúc. Làm cho
                      mọi thứ trở nên dễ hiểu và thú vị để học là chuyên môn của
                      chúng tôi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-6 text-center">
              <img
                src={course2}
                alt=""
                style={{ width: "85%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="row mt-3 p-5 ms-5">
            <div
              className="row h-100 p-5 border rounded-3"
              style={{ backgroundColor: "rgba(249, 187, 43, 0.899)" }}
            >
              <div className="col-sm-7 ">
                <button
                  className="btn btn-danger mb-3"
                  style={{ borderRadius: "30px" }}
                >
                  Website
                </button>
                <h2 className="h1 font-weight-bold">THẦY LONG WEB</h2>
                <h3> Hướng dẫn lập trình từ cơ bản đến nâng cao </h3>
                <span style={{ letterSpacing: "1px", lineHeight: "1.5em" }}>
                  Một hướng dẫn đầy đủ để hiểu golang và thành thạo nó. Thông
                  tin chi tiết ở dưới.
                </span>
                <div>
                  <Link
                    className="btn btn-lg mt-5 bg-dark text-white"
                    to="https://www.youtube.com/c/ThayLongWeb"
                  >
                    Tham gia khóa học ngay
                  </Link>
                </div>
              </div>
              <div className="col-sm-5 text-center">
                <img
                  src={bannerGT}
                  alt="Thầy Long WEB"
                  style={{ width: "80%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3 p-5  ms-5">
            <div className="col-sm-12 mb-5">
              <h5 className=" text-info">Các website lập trình</h5>
              <h2 className="h1">
                <strong>
                  Tại sao lại chọn các website uy tín để học lập trình?
                </strong>
              </h2>
              <div className="p-4">
                <span
                  className="my-2"
                  style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
                >
                  Hiện nay lựa chọn tiếp tục con đường học tập của mình thông
                  qua con đường tự học online là không còn hiếm, tuy nhiên để
                  thực sự có thể học tập và đạt được hiệu quả bạn cần phải trang
                  bị cho mình không chỉ riêng công cụ học tập là những website
                  dạy online. Mà còn phải chuẩn bị tinh thần tự học, tự giác cao
                  để xây dựng nền tảng kiến thức cho chính mình.
                </span>
                <h4 className="my-3">
                  <i>
                    <strong> Thời gian linh hoạt </strong>
                  </i>
                </h4>
                <span
                  className="my-2"
                  style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
                >
                  Học lập trình trên web online giúp việc sắp xếp thời gian và
                  lịch trình linh hoạt và thoải mái hơn. Bạn hoàn toàn có thể
                  làm các công việc khác và bắt đầu học mỗi khi có thời gian
                  rảnh. Thậm chí, chỉ trong 15 – 30 phút nghỉ ngơi, bạn cũng có
                  thể tranh thủ học thêm được một vài kiến thức bổ ích.
                </span>
                <h4 className="my-3 ">
                  <i>
                    <strong>Tiết kiệm chi phí </strong>
                  </i>
                </h4>
                <span
                  className="my-2"
                  style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
                >
                  So với việc đăng ký các lớp khóa học thì chi phí cho việc học
                  online thường thấp hơn rất nhiều. Điều này đồng nghĩa với việc
                  khi bỏ ra cùng một khoản chi phí, với học online bạn sẽ được
                  tiếp cận với nhiều kiến thức, kỹ năng lập trình hữu ích hơn.
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="row h-100 p-2 border rounded-3 me-1"
                style={{ backgroundColor: "rgba(0, 204, 119, 0.916)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <button
                    className="btn btn-dark mb-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Website
                  </button>
                  <h4 className="font-weight-bold">Khóa học font-end của F8</h4>
                  <Link
                    to="https://www.youtube.com/c/F8VNOfficial"
                    className="btn mt-5 text-white"
                    style={{ backgroundColor: "rgb(102,51,204)" }}
                  >
                    Tham gia ngay
                  </Link>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={course3}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="row h-100 p-2 border rounded-3 me-1"
                style={{ backgroundColor: "rgb(255,243,170)" }}
              >
                <div className="col-sm-6 pt-4 ps-3">
                  <button
                    className="btn btn-dark mb-3"
                    style={{ borderRadius: "30px" }}
                  >
                    Website
                  </button>
                  <h4 className="font-weight-bold">
                    Khóa học font-end của K-Team
                  </h4>
                  <Link
                    to="https://www.youtube.com/c/KTeam"
                    className="btn mt-5 text-white"
                    style={{ backgroundColor: "rgb(102,51,204)" }}
                  >
                    Đăng ký ngay
                  </Link>
                </div>
                <div className="col-sm-6 text-center">
                  <img
                    src={course4}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 p-5 ms-5">
            <div
              className="row h-100 p-5 border rounded-3"
              style={{ backgroundColor: "rgba(98, 195, 255, 0.858)" }}
            >
              <div className="col-sm-7 ">
                <button
                  className="btn btn-warning mb-3"
                  style={{ borderRadius: "30px" }}
                >
                  Mới nhất
                </button>
                <h2 className="h1 font-weight-bold">
                  <p>CHÀO MỪNG CÁC BẠN ĐÃ ĐẾN VỚI PHÒNG THI ONLINE </p>
                </h2>
                <h4 style={{ letterSpacing: "1px", lineHeight: "1.5em" }}>
                  Đây là phòng thi online được tạo ra từ một bạn sinh viên
                  Fpoly. Với giao diện được thiết kế đơn giản phù hợp với các
                  bạn sinh viên. Sản phẩm này sẽ tạo ra sự liên kết giữa học và
                  thi. Hãy tham gia và trải nghiệm ngay thôi.
                </h4>
                <button
                  className="btn mt-3 text-white"
                  style={{ backgroundColor: "rgb(102,51,204)" }}
                >
                  Tham gia ngay
                </button>
              </div>
              <div className="col-sm-5 ps-5 text-center">
                <img
                  src={exam}
                  alt="Phòng thi "
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3 p-5  ms-5">
            <div className="col-sm-8 mb-5">
              <h5 className=" text-info">Blog & bài báo</h5>
              <h2 className="h1">
                <strong>Blog và các bài báo của chúng tôi</strong>
              </h2>
              <span
                className=""
                style={{ letterSpacing: "1px", lineHeight: "1.5em" }}
              >
                Một nơi để học, dạy và thảo luận về mã. Đóng góp và nhận được
                phần thưởng. Phục vụ cộng đồng mã hóa là ưu tiên số 1 của chúng
                tôi
              </span>
            </div>

            <div className="col-sm-4 mb-5">
              <button
                className="btn mt-5 text-white float-end"
                style={{ backgroundColor: "rgb(102, 51, 204)" }}
              >
                Xem tất cả
              </button>
            </div>

            <div className="col-md-4 ">
              <div className="row h-100 rounded-3 me-2">
                <img
                  src={linuxBlog}
                  alt=""
                  style={{ width: "100%", height: "80%", objectFit: "cover" }}
                />
                <span className="mt-2">
                  <strong>Các bài viết về Lunix</strong>
                </span>
                <div>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "rgb(102,51,204)" }}
                  >
                    Xem thêm <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row h-100  rounded-3 me-1 ms-1">
                <img
                  src={kubernetes}
                  alt=""
                  style={{ width: "100%", height: "80%", objectFit: "cover" }}
                />
                <span className="mt-2">
                  <strong>Các bài viết về Lunix</strong>
                </span>
                <div>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "rgb(102,51,204)" }}
                  >
                    Xem thêm <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row h-100  rounded-3 ms-2">
                <img
                  src={devops}
                  alt=""
                  style={{ width: "100%", height: "80%", objectFit: "cover" }}
                />
                <span className="mt-2">
                  <strong>Các bài viết về Lunix</strong>
                </span>
                <div>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "rgb(102,51,204)" }}
                  >
                    Xem thêm <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}
