import "./App.css";

import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Firebase } from "./firebase/firebase";
import { getAuth } from "firebase/auth";

//import { connect } from "react-redux";

import { AppBarControl } from "./components/controls/AppBar/AppBar.control";
import NotFoundPage from "./components/pages/NotFound/NotFound.page";
//import SpokaneControl from "./components/controls/Spokane/Spokane.control";
import HomePage from "./components/pages/Home/Home.page";

function App() {
  // const [currentUser, setCurrentUser] = useState<Profile>();

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
    <BrowserRouter>
      <div className="App">
        <AppBarControl />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
