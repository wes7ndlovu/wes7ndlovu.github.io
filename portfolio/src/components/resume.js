import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Mbusiwesizwe Ndlovu</h2>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid blue", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid blue", width: "50%" }} />
            <h5>Address</h5>
            <p>1487 Picnic Park, Waterfalls, Harare, Zimbabwe.</p>
            <h5>Phone</h5>
            <p>+263 771 781 652</p>
            <h5>Email</h5>
            <p>wes7ndlovu@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid blue", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={"February 2015"}
              endYear={"January 2019"}
              schoolName="Eastern Mediterranean University"
              schoolDescription="Bachelor’s degree in Information Technology"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={"June 2018"}
              endYear={"August 2018"}
              jobName="Intern"
              jobDescription="Worked as an intern at Eastern Mediterranean University. My daily dutes were: •	Installing and maintaining computer software on to personal computers
              •	Repairing and maintaining computer hardware 
              •	Printing and scanning documents
              •	Resolving internet connection problems 
              "
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="CSS" progress={100} />
            <Skills skill="javascript" progress={60} />
            <Skills skill="React" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
