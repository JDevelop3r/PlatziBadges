import React from "react";

import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import { Link } from "react-router-dom";
import useIncreaseCount from "../hooks/useIncreaseCount";

export default function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {props.badge.firstName} {props.badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={props.badge.firstName}
              lastName={props.badge.lastName}
              email={props.badge.email}
              twitter={props.badge.twitter}
              jobTitle={props.badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-primary mr-4"
              >
                Increase Count: {count}
              </button>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${props.badge.badgeId}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                onDeleteBadge={props.onDeleteBadge}
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
