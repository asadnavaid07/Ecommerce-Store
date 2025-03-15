import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-7">
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}

export default App;
