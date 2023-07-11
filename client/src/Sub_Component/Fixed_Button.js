import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

function HelpBtn() {
  const [status, setStatus] = useState(false);
  const [icon, setIcon] = useState(<BsFillChatSquareTextFill />);
  return (
    <div className="fixed z-10  bottom-10 right-10">
      <Button
        style={{
          border: 0,
          width: 60,
          height: 60,
          borderRadius: 50,
          backgroundColor: "rgb(168, 134, 205)",
          margin: "0px 37px 20px 0px",
          position: "fixed",
        }}
        className="absolute bottom-0 right-5 "
        onClick={() => {
          setStatus(!status);
          setIcon(!icon);
        }}
      >
        <h2
          style={{ marginTop: 6, padding: 3 }}
          className="  mt-2 ml-0  text-3xl"
        >
          {icon ? <BsFillChatSquareTextFill /> : <RxCross1 />}
        </h2>
      </Button>

      {status ? (
        <div className="absolute mt-30">
          {" "}
          <Button
            style={{
              border: 0,
              width: 60,
              height: 60,
              borderRadius: 50,
              // marginLeft: 1190,
              backgroundColor: "#03E78B",
              margin: "-186px 38px 54px",
              position: "fixed",
            }}
            className="absolute right-5"
          >
            <h2 title="Phone" className="  mt-2 ml-1  text-3xl">
              <MdPhone />
            </h2>
            <br />
          </Button>
          <Button
            style={{
              border: 0,
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: "#49E670",
              margin: "-115px 38px 5px 1px",
              position: "fixed",
            }}
            className="absolute right-5"
          >
            <p className="  mt-2 ml-1  text-3xl" title="Whatsapp">
              <BsWhatsapp />
            </p>
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default HelpBtn;
