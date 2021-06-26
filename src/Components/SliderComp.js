import React, { useState } from "react";

export default function SliderComp(props) {
  const [amtSlider, setAmountSlider] = useState("5000");
  const [tenureSlider, setTenureSlider] = useState("1");
  const [ten, setTen] = useState("1");

  const handleAmtChange = (e) => {
    e.preventDefault();
    setAmountSlider(e.target.value);
    props.handleRange(e.target);
  };
  const handleTenureChange = (e) => {
    e.preventDefault();
    setTen(e.target.value);
    setTenureSlider(e.target.value);
    props.handleRange(e.target);
  };

  return (
    <div className="d-flex flex-column">
      <h3>Amount</h3>

      <input name="Amount" type="text" disabled value={amtSlider} />

      <input
        type="range"
        id="range"
        name="Amount"
        min="5000"
        max="50000"
        step="5000"
        onChange={handleAmtChange}
      />

      <h3>Tenure</h3>

      <input name="Tenure" type="text" disabled value={tenureSlider} />

      <input
        type="range"
        id="range"
        name="Tenure"
        min="1"
        max="6"
        step="1"
        value={ten}
        onChange={handleTenureChange}
      />
    </div>
  );
}
