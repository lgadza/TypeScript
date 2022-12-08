import React from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./componets/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import BlogDisplay from "./componets/Blog";
function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <MyNavBar />
        <BlogList />
      </Container>

      {/* <Container>
        <Routes>
          <Route element={<BlogDisplay />} path={"./blog"} />
        </Routes>
      </Container> */}
    </BrowserRouter>
  );
}

export default App;
