import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
import Offline from "./pages/Offline";
import NoteState from "./context/NoteState";

import AdminLog from "./Admin/AdminLog";

export default function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}
