import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Auth from "./views/Auth/Auth";
import Quiz from "./views/Quiz/Quiz";
import ProtecttedRoute from "./ProtectedRoute";

export const Context = createContext();

function App() {
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("login")) || false
  );

  useEffect(() => {
    localStorage.setItem("login", login);
  }, [login]);

  return (
    <Context.Provider value={{ login, setLogin }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Auth />} />
        <Route element={<ProtecttedRoute />}>
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
