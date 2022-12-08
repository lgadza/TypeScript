import React from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./componets/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import Details from "./componets/Test";
// import BlogDisplay from "./componets/Blog";
// import Details from "./componets/Details";
// import BasicExample from "./componets/Test";
function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <MyNavBar />
        {/* <BasicExample /> */}
      </Container>

      <Container>
        <Routes>
          <Route element={<Details />} path="/details/:blogId/" />

          <Route element={<BlogList />} path={"/"} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
