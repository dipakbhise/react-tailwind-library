import React from "react";

const Button = (props) => {
  const { text } = props;
  return (
    <>
      <button className="px-2 py-1 bg-violet-400 rounded">{text}</button>
    </>
  );
};

export default Button;
