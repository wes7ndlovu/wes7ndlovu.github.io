import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={6}>
            <h2 style={{ paddingTop: "0.5em" }}>About Me</h2>
            <h4 style={{ color: "grey" }}>Personal Bio</h4>
            <hr style={{ borderTop: "3px solid blue", width: "100%" }} />
            <p>
              • Can work under extreme conditions and be able to finish the work
              at hand
              <br />
              • Can work very well with teammates
              <br />
              • Ready to relocate • Great communications and relation with
              others
              <br />
              • Open minded and willing to learn new stuff
              <br />• Can adapt to the work environment quickly
            </p>
            <hr style={{ borderTop: "3px solid blue", width: "100%" }} />
            <h5>Hobbies</h5>
            <p>
              • Going to the gym
              <br />
              • Reading technology material
              <br />
              • Watching movies
              <br />
              • Listening to music
              <br />
              • Going out with family and friends
              <br />
            </p>
            <hr style={{ borderTop: "3px solid blue", width: "100%" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
