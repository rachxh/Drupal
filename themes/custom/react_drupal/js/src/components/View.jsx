import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <div>
        <h2>This is your input:</h2>
        <div className="verticalLines"></div>
        <ul className="listItem">
          <li>
            First name:<span>{props.firstName}</span>
          </li>
          <li>
            Last name: <span>{props.lastName}</span>
          </li>
          <li>
            Phone: <span>{props.phone}</span>
          </li>
          <li>
            Role: <span>{props.role}</span>
          </li>
          <li>
            Message: <span>{props.message}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default View;
