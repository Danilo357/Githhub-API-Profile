import React from "react";
import I from "../lib/Icon";
import moment from "moment";

function color(language) {
  switch (language) {
    case "JavaScript":
      return "yellow languageDot";
    case "HTML":
      return "red languageDot";
    case "CSS":
      return "purple languageDot";
    default:
      return "nodiv";
  }
}

function Repos(props) {
  return (
    <div className="www">
      <div className="header">
        <p>Overview</p>
        <p>Repositories: 25</p>
        <p>Projects: 0</p>
        <p>Packages: 0</p>
        <p>Stars: 0</p>
        <p>Following: 0</p>
        <p>Followers: 0</p>
      </div>
      <hr />
      <input
        className="find"
        type="text"
        name="text"
        placeholder="find a repository..."
      ></input>
      <input
        className="fin"
        type="text"
        name="text"
        placeholder="Type: All"
      ></input>
      <input
        className="fin"
        type="text"
        name="text"
        placeholder="Language: All"
      ></input>
      <input
        className="fins"
        type="text"
        name="text"
        placeholder="New Repo"
      ></input>

      {props.repo2.map((repo3, iterator) => (
        <div className="main" key={"repository-" + iterator}>
          <p className="reponame">
            {repo3.name}{" "}
            <button className="butt">
              <I icon="star" />
              Star
            </button>
          </p>
          <p className="reponame1">
            <div className="code">
              <div
                className={repo3.language ? color(repo3.language) : "nodiv"}
              ></div>
              <p>{repo3.language}</p>
            </div>
            <p>Updated: {moment(repo3.updated_at).fromNow()}</p>
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

// iterator is the same as i - index in loops i-index

export default Repos;
