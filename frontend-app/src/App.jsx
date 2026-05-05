import React from "react";

import { Counter } from './Components/Counter';
import CounterFBC from "./Components/CounterFBC";

const App = () => {

  let details=["yelija","Hu2025"];
  let role="Developer";
  return(
    <p>
      
      <Counter/>
      <Counter/>
      <CounterFBC fullDetails={details} role={"role"}/>
      
    <h1> react using vite</h1>
    
    </p>
  );
};
export default App;