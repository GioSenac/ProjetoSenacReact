import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rota from "./Components/Routes/Routes"


function App() {
  return (
    <>
    <BrowserRouter>
      <Rota/>
    </BrowserRouter>
    </>
  );
}

export default App;
