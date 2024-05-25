import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
//import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Movie Recommendation System"
              description="A personalized movie recommender system that suggests films based on user preferences and viewing history
              , utilizing advanced algorithms to deliver accurate and tailored recommendations for an enhanced viewing experience."
              ghLink="https://github.com/shuvojitkoley/movie-reccomended-system.git"
              demoLink="https://huggingface.co/spaces/shuvojitkoley007/mrs-lite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Block-chain Based Online voting system"
              description="A secure blockchain-based online voting system ensuring transparency, immutability, 
              and trust in electoral processes, allowing voters to cast ballots digitally with enhanced security and verifiability."
               ghLink="https://github.com/shuvojitkoley"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>   
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
