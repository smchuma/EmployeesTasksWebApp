import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Navbar,
  Public,
  Layout,
  Welcome,
  DashLayout,
  NotesList,
  UsersList,
} from "./Components";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path="/dash" element={<DashLayout />}>
            <Route index element={<Welcome />} />
            <Route path="notes">
              <Route index element={<NotesList />} />
            </Route>
            <Route path="users">
              <Route index element={<UsersList />} />
            </Route>
          </Route>{" "}
          {/* end dash */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
