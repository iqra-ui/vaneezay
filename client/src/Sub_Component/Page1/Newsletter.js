import React from "react";
// import Form from 'react-bootstrap/Form';
import { BsArrowRight } from "react-icons/bs";

function Newsletter() {
  return (
    <div>
      <p className="mt-20 text-center text-4xl font-medium">NEWSLETTER</p>
      <p className="text-center">
        Subscribe our newsletter to get notify about discount and latest update.
        Don’t worry, we not
        <br /> spam!
      </p>

      <div className=" w-1/2 md:w-5/12 border-b border-slate-300 mt-5  mx-auto flex justify-between column">
        <input
          type={"email"}
          placeholder="Enter your email here"
          className=" p-3 w-96 text-slate-400 "
        ></input>
        <button className="ml-5">
          <h3>
            <BsArrowRight className="hover:text-yellow-700" />
          </h3>
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
