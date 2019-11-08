import React from "react"
import I from "../lib/Icon"

function Users(props) {
  return (
    <div>
      <div className="info">
        <img src={props.avatar_url} alt={props.name} />

        <h1>{props.name}</h1>
        <p className="log">{props.login}</p>
        <h1>{props.email}</h1>
        <input
          className="inedit"
          type="text"
          name="text"
          placeholder="Edit profile"
        ></input>
        <p className="location">
          <I icon="map-marker" />
          {props.location}
        </p>
      </div>
    </div>
  )
}
// I didn't input the email inside the guthub
export default Users
