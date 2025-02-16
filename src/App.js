import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/oauth/Login";
import LoginAdd from "./pages/oauth/LoginAdd";
import Main from "./pages/studies/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/oauth" element={<Login />} />
          <Route path="/auth/add" element={<LoginAdd />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
