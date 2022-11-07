import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import User from "./pages/User";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="home" element={<User />} />
          <Route path="/" element={<Signin />} />
          <Route
            path="account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
