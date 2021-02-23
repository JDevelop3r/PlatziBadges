import React from "react";

import "./styles/NotFound.css";
import question from "../images/Questions-bro.svg";

export default function NotFound() {
  return (
    <div className="NotFoundPage">
      <div>
        <img src={question} alt="Question" />
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
}
