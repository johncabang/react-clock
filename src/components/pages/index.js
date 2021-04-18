import React, { useState } from "react";
import Expandbar from "../Expandbar";
import Main from "../Main";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Expandbar isOpen={isOpen} toggle={toggle} />
      <Main isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Home;
