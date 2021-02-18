import React from "https://esm.sh/react";

export const Button = ({ title = "Hello" }) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: "lightblue",
        padding: "8px 16px",
        margin: 16,
        borderRadius: 100,
      }}
    >
      {title}
    </div>
  );
};
