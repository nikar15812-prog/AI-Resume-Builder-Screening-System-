import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login/Login";
import CreatePassword from "./components/CreatePassword/CreatePassword";
import LoginSuccessful from "./components/LoginSuccessful/LoginSuccessful";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/create-password"
        element={<CreatePassword />}
      />

      <Route
        path="/login-successful"
        element={<LoginSuccessful />}
      />

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;