import React from "react";
import Styles from "@/styles/formStyle.module.css";

const Dropdown = ({item,selectedOption,handleChange }) => {
  return (
    
    <div>
        <select className={Styles.customSelect} value={selectedOption} onChange={handleChange}>
          {item?.map((ele, i) => {
            return (
              <option
                className={Styles.selectOption}
                key={i}
                value={ele?.link}
              >
                {ele?.value}
              </option>
            );
          })}
        </select>
    </div>
  );
};

export default Dropdown;
