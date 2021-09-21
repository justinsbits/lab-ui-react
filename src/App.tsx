import { useEffect } from "react";
import { Firebase } from "./firebase/firebase";
import { getAuth } from "firebase/auth";

//import { connect } from "react-redux";

import { AppBarControl } from "./components/controls/AppBar/AppBar.control";

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
    <div className="App">
      <AppBarControl />
    </div>
  );
}

export default App;
