import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

// action names
const LIST_USERS = "user/LIST_USER"
const LIST_REPO = "user/LIST_REPO"
// reducer
const initialState = {
  user: {},
  repos: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_USERS:
      return { ...state, user: action.payload }
    case LIST_REPO:
      return { ...state, repos: action.payload }
    default:
      return state
  }
}

// custom hook
export function useData(username) {
  const dispatch = useDispatch()
  const user1 = useSelector(appState => appState.Reducer.user)
  const repo1 = useSelector(appState => appState.Reducer.repos)

  useEffect(() => {
    dispatch(getUser(username))
    dispatch(getRepos(username))
  }, [username, dispatch])

  return { user1, repo1 }
}

// actions
function getUser(username) {
  return dispatch => {
    Axios.get(`https://api.github.com/users/${username}`).then(response => {
      dispatch({
        type: LIST_USERS,
        payload: response.data
      })
    })
  }
}

function getRepos(username) {
  return dispatch => {
    Axios.get(`https://api.github.com/users/${username}/repos`).then(
      response => {
        dispatch({
          type: LIST_REPO,
          payload: response.data
        })
      }
    )
  }
}
