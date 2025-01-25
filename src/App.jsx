import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Auth from "./views/Auth/Auth";
import Quiz from "./views/Quiz/Quiz";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Auth />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
