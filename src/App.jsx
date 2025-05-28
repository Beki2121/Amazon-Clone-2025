import { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Routing from "./Router";
import { type } from "./Utility/Action.type";
import { auth } from "./Utility/firebase";
import { DataContext } from "./components/DataProvider/DataProvider";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
}

export default App;
