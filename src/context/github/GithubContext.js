import { createContext, useReducer } from "react";
import GithubReducers from "./GithubReducers";
const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducers, initialState);
  // Strictly for testing purposes (we are going to need to search for users and not fetch randoms)
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
