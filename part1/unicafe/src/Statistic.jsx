import React from "react";

const Statistic = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>{`${text}: `}</th>
          <th>{value}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistic;
