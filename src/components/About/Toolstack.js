import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAnaconda,
  SiPycharm,
  SiWindows11,
} from "react-icons/si";
import{
GiJupiter,
} from "react-icons/gi"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiJupiter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
    </Row>
  );
}

export default Toolstack;
