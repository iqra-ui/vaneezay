import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

function HoverIcon(props) {
  const [hovered, setHovered] = useState(false);


  const handleMouseEnter = () => {
    setHovered(true);
    
  };
  const handleMouseLeave = () => {
    setHovered(false);
    
  };
  return (
    <div>
      <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  
        {hovered && (
          <div className="flex flex-row justify-center">
            <Button
              className="bg-black w-11 h-11 flex p-2 "
              style={{
                marginTop: -46,
                border: "none",
                borderRadius: 0,
                hover: "backgroundColor-red",
              }}
            >
              {" "}
              <p className=" w-10 w-10">Buy</p>
            </Button>
            <Button
              className="bg-black w-11 h-11 ml-1 "
              style={{ marginTop: -46, border: "none", borderRadius: 0 }}
            >
              <FaSearchPlus />
            </Button>
            <Button
              className="bg-black w-11 h-11 ml-1"
              style={{ marginTop: -46, border: "none", borderRadius: 0 }}
            >
              <FiHeart />
            </Button>
          </div>
        )}
        <div>
          <p
            class="text-center font-Russo One font-extrabold"
            style={{ marginTop: 5 }}
          >
            {props.title}
          </p>
          <p class="text-center font-Russo One text-amber-700">{props.t}</p>
        </div>
      </div>
    </div>
  );
}

export default HoverIcon;
