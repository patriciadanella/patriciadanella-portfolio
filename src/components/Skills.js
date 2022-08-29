import React, { Component } from "react";
import { SiAdobepremierepro, SiAutodesk, SiGit, SiSketchup } from "react-icons/si";

class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-center">SKILLS</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <h1>
              <SiSketchup color="blue" size={50} />
              &emsp;&emsp;
              <SiAutodesk color="red" size={50} />
              &emsp;&emsp;
              <SiAdobepremierepro color="blue" size={50} />
              &emsp;&emsp;
              <SiGit color="orange" size={50} />
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
