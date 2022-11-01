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
  Home,
  About,
} from "./Components";
import "./App.scss";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Public />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Route>
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
