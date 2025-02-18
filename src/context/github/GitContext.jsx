import { createContext, useReducer } from "react";
import gitReducer from "./GitReducer";

const GitContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitReducer, initialState);

  return (
    <GitContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitContext.Provider>
  );
};

export default GitContext;
