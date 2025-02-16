import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/oauth/Login";
import LoginAdd from "./pages/oauth/LoginAdd";
import OAuthCallback from "./pages/oauth/OAuthCallback";
import Main from "./pages/studies/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/oauth" element={<Login />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route path="/oauth/add" element={<LoginAdd />} />
          <Route path="/studies/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
