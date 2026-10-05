import React from "react";

function ICard(data) {
  return (
    <div className="id-card">

      <h2>{data.data.college}</h2>

      <img
        src={data.data.pic}
        height={100}
        width={100}
        alt={data.data.name}
      />

      <h3>{data.data.name}</h3>

      <p>{data.data.roll}</p>
      <p>{data.data.branch}</p>
      <p>{data.data.college}</p>

    </div>
  );
}

export default ICard;