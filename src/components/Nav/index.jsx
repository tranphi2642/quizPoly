import React from "react";
import Logo from "../../assets/images/banner/logoFPT.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./index.scss";

export default function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
      expand="lg"
      sticky="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} width="150" alt="FPT logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/introduce" eventKey={"/introduce"}>
            Trang chủ
          </Nav.Link>
          <Nav.Link as={Link} to="/courses" eventKey={"/courses"}>
            Khoá học
          </Nav.Link>
          <Nav.Link as={Link} to="/examination" eventKey={"/examination"}>
            Phòng thi
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" eventKey={"/contact"}>
            Liên hệ
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Ngôn ngữ" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/" eventKey={"/"}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/" eventKey={"/"}>
              Vietnamese
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/login" eventKey={"/login"}>
            Đăng nhập
          </Nav.Link>
          <Nav.Link as={Link} to="/register" eventKey={"/register"}>
            Đăng ký
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
