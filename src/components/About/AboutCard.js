import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SHUVOJIT KOLEY </span>
            from <span className="purple"> Westbengal, India.</span>
            <br />
            I am currently a 4th year Engineering student .GATE qualified(2024).
            <br />
            I have completed Diploma in Mechanical Engineering at Ramakrishna Mission
            Shilpamandira.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shuvojit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
