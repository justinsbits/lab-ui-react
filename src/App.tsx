import { useEffect, useState } from "react";
import { Firebase } from "./firebase/firebase";
import { getAuth } from "firebase/auth";
// import {
//   ApolloClient,
//   ApolloProvider,
//   HttpLink,
//   InMemoryCache,
// } from "@apollo/client";
import { AppBarControl } from "./components/controls/AppBar/AppBar.control";
import AuthContext from "./services/authentication/Authentication.context";

// const cache = new InMemoryCache();

// const GITHUB_BASE_URL = "https://api.github.com/graphql";

// const httpLink = new HttpLink({
//   uri: GITHUB_BASE_URL,
//   headers: {
//     authorization: `Bearer ${process.env.GB_API_TOKEN}`,
//   },
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache,
// });

function App() {
  // const [currentUser, setCurrentUser] = useState<Profile>();
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const toggleAuthenticated = () =>
    setUserAuthenticated(userAuthenticated === true ? false : true);

  (function initApp() {
    Firebase.Init();
  })();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user === null) {
        // clear profile
        return;
      } else {
        // lookup profile
      }

      // if (auth.currentUser) {
      //   debugger;
      //   console.log("IN!!!");
      // } else {
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ userAuthenticated, toggleAuthenticated }}>
        <AppBarControl />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
