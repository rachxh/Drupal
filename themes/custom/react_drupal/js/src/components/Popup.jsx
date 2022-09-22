import React from "react";

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>This is your note:</h2>
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
        <button className="btn" onClick={props.submit}>
          Yes, I am sure
        </button>
        <button className="btn" onClick={props.close}>
          Not, I don't want to post it
        </button>
      </div>
    </div>
  );
};

export default Popup;
