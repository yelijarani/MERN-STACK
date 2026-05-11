import React from "react";

 import Nav from "./components/Nav";
 import { Counter } from './Components/Counter';//braces are needed when directly importing
import CounterFBC from "./Components/CounterFBC";
import DisplayMyDetails from "./DisplayMyDetails";

const App=()=> {
  let details=["yelija","23NR1A0509"]
  let Role="developer";
  let Name="YELIJA RANI"
  let Roll="23NR1A0509"
  let Course="CSE"
  let College="BITS"

   return (
    <p>
      <Nav/>
      <Counter/>
      <CounterFBC />
      <DisplayMyDetails role={Role} name={Name} roll={Roll} course={Course} clgname={College} />
    </p>
   );
};
export default App;