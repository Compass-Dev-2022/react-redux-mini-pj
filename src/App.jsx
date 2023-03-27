import React from "react";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import AddGamePage from "./pages/AddGamePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="add" element={
<AddGamePage />
          } />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
