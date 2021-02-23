import React, { Component } from "react";
import { Link } from "react-router-dom";

import useSearchBadges from "../hooks/useSearchBadges";
import Gravatar from "./Gravatar";
import "./styles/BadgesList.css";

class BadgesListItem extends Component {
  /* firstName = props.badge.name.slice(
    0,
    props.badge.name.indexOf(" ")
  );
  lastName = props.badge.name.slice(
    props.badge.name.indexOf(" ") + 1
  ); */
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
    /* Rick y morty api
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={props.badge.image}
          alt={`${firstName} ${lastName}`}
        />

        <div>
          <strong>
            {firstName} {lastName}
          </strong>
          <br />@
          {`${firstName.toLowerCase() + lastName.toLowerCase()}`}
          <br />
          {props.badge.species}
        </div>
      </div>
    ); */
  }
}

export default function BadgesList(props) {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);

  if (filteredBadges.length === 0) {
    return (
      <>
        <div className="form-group">
          <label>FilterBadges</label>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>
        <h3>No encontramos ningún badge</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>FilterBadges</label>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="form-control"
          type="text"
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
