import React from "react";

const calcLoan = (o) => {
  let r = 0.12;
  let p = o.p;
  let n = o.n;

  let processingFeeRate = 0.9;
  let gstRate = 5;
  let bankFee = p * processingFeeRate;
  let gst = bankFee * gstRate;
  let NetCreditedAmount = p - bankFee - gst;
  let num = p * r * Math.pow(1 + r, n);

  let den = Math.pow(1 + r, n - 1);

  let emi = num / den;
  return {
    emi,
    bankFee,
    gst,
    NetCreditedAmount,
  };
};
export default function LoanContent(props) {
  const loan = calcLoan(props.data);

  return (
    <div
      style={{
        background: "#f9f9f9",
        borderRadius: 25 + "px",
        width: 90 + "%",
        padding: 10 + "px",
      }}
    >
      <h3>Loan Details</h3>

      <table>
        <tr>
          <td>Annual Intrest</td>
          <td>{props.data.r}%</td>
        </tr>
        <tr>
          <td>Monthly EMI</td>
          <td>{loan.emi.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Banking Fee</td>
          <td>{loan.bankFee.toFixed(2)}</td>
        </tr>
      </table>
      <hr />
      <h3>Deductables </h3>
      <table>
        <tr>
          <td>Processing Fees</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>GST</td>
          <td>5%</td>
        </tr>
      </table>
      <hr />
      <h3>Net Amount to be {loan.NetCreditedAmount} credited</h3>
    </div>
  );
}
