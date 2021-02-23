import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="Home row justify-content-center">
          <div className="Home__col col-12 col-md-4">
            <img src={confLogo} alt="Plazi Conf Logo" />
            <h2 className="text-white mt-3">Print your Badges</h2>
            <p className="text-white mb-2">
              The easiest way to manage your conference
            </p>
            <Link to="/badges" className="text-center btn btn-primary">
              Start now
            </Link>
          </div>
          <div className="Home__col col-12 col-md-8">
            <img className="img-fluid p-4" src={astronauts} alt="Astronauts" />
          </div>
        </div>
      </div>
    </div>
  );
}
