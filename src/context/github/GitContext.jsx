import { createContext, useReducer } from "react";
import gitReducer from "./GitReducer";

const GitContext = createContext();

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitReducer, initialState);

  // Get initial Users
  const fetchUsers = async () => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GitContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GitContext.Provider>
  );
};
export default GitContext;
