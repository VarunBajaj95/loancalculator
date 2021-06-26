import "./App.css";
import SliderComp from "./Components/SliderComp";
import LoanContent from "./Components/LoanContent";
import { useState } from "react";
function App() {
  const [loanDet, setLoanDet] = useState({
    p: "5000",
    n: "1",
    r: 12,
  });

  const handleRange = (evt) => {
    if (evt.name === "Amount")
      setLoanDet((prevState, props) => ({ ...prevState, p: evt.value }));
    else {
      setLoanDet((prevState, props) => ({ ...prevState, n: evt.value }));
    }
  };
  
  return (
    <div className="App">
      <div className="d-flex flex-column container">
        <SliderComp handleRange={handleRange} />
        <LoanContent data={loanDet} />
      </div>
    </div>
  );
}

export default App;
