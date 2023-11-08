import React from "react";
import { Header } from "./components/Header";
import Resumo from "./components/Resum";
import { Descmoney } from "./components/Descmoney";



export const App = () => {

  return(
      <>
          <Header/>
          <Resumo/>
          <Descmoney/>
      </>
  )
}

export default App;