import React from "react";

const Input = () => {
  return (
    <>
      <label for="myfile">Select files:</label>
      <input type="file" id="myfile" name="myfile" multiple></input>
    </>
  );
};

export default Input;
