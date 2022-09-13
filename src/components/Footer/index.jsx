import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

function Footer() {
  return (
    <footer className="p-5">
      <span className="title ms-4 font-weight-bold fs-2">
        Liên hệ với chúng tôi
      </span>
      <div className="row m-3">
        <div className="col-sm-3 d-flex flex-column mb-2 ">
          <span className="title mb-1 fs-5">Bài viết</span>
          <Link className="link mb-1 fs-6" to="/">
            Giới thiệu
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Khóa học
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Phòng thi
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Sân chơi
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Blog và các bài báo
          </Link>
        </div>
        <div className="col-sm-3 d-flex flex-column mb-2">
          <span className="title mb-1 fs-5">Khóa học</span>
          <Link className="link mb-1 fs-6" to="/">
            Lập trình Android nâng cao
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Lập trình Android cơ bản
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Lập trình ASP.NET
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Điện toán đám mây
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            SQL Server
          </Link>
        </div>
        <div className="col-sm-3 d-flex flex-column mb-1">
          <span className="title mb-1 fs-5">Xã hội</span>
          <Link className="link mb-1 fs-6" to="/">
            Facebook
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Youtube
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Github
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Instagram
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            LinkedIn
          </Link>
        </div>
        <div className="col-sm-3 d-flex flex-column ">
          <span className="title mb-1 fs-5">Liên hệ</span>
          <Link className="link mb-1 fs-6" to="/">
            Facebook: Trần Phi
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Instagram: pi.calors_
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Điện thoại: 0377166208
          </Link>
          <Link className="link mb-1 fs-6" to="/">
            Email: phitmps16509@fpt.edu.vn
          </Link>
          <Link
            className="link mb-1 fs-6"
            to="https://www.youtube.com/c/ThayLongWeb"
          >
            Website: ThayLongWeb
          </Link>
        </div>
      </div>
      <p className="m-auto text-center fs-5">
        FPT Polytechnic &copy; 2022. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
