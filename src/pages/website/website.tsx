import React, { useState } from "react";
import Dropdown from "../../components/Core/Form/FormItems/Dropdown";
const Website = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [websites, setWebsites] = useState([
    {
      value: "Clutch",
      link: "https://clutch.co/",
    },
    {
      value: "def",
      link: "....",
    },
    {
      value: "ghi",
      link: "....",
    },
    {
      value: "jkl",
      link: "....",
    },
  ]);

  const handleChange = (e: any) =>{
    const result = e.target.value;
    setSelectedOption(result);
    console.log("e >>", result);
  }

  const onSubmit = () =>{

  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Websites Scrapping</h1>
      </div>
      <div style={{ backgroundColor: "ButtonShadow", padding: "20px" }}>
        <div>
          <form>
            <h3>Select Website</h3>
            <div style={{width: "300px", display:"flex", justifyContent:"space-between"}}>
              <Dropdown item={websites} handleChange={handleChange} selectedOption={selectedOption}/>
              <div style={{alignSelf:"center"}}>
              <button type="submit" style={{padding:"7px 14px", fontSize:"14px", fontWeight:"bold", color:"white", backgroundColor:"#0000FF", border:"0px", borderRadius:"5px"}}>
                Start
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Website;
