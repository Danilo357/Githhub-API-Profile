import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import User from "./User"
import Repos from "./Repos"
import { useData } from "../redux/ducks/github"

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const { user1, repo1 } = useData("danilo357")
  return (
    <div className="container">
      <User {...user1} />
      <Repos repo2={repo1} />
    </div>
  )
}

export default Wrap
