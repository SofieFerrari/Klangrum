import React from "react";
import { Header } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Services />
      <Contact />
    </>
  );
};

export default App;