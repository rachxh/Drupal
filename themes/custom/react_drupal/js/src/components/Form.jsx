import React from "react";

const Form = (props) => {
  return (
    <form
      className="formContainer"
      onChange={props.change}
      onSubmit={props.submit}
    >
      <div className="formRow">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          defaultValue={props.firstname}
        ></input>
      </div>
      <div className="formRow">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          defaultValue={props.lastname}
        ></input>
      </div>
      <div className="formRow">
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          id="phone"
          required
          defaultValue={props.phone}
        ></input>
      </div>
      <div className="formRow">
        <label htmlFor="role">Role</label>
        <select name="role" id="role" required>
          <option value="" invalid="true" hidden>
            Choose a role...
          </option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="other">Others</option>
        </select>
      </div>
      <div className="formRow">
        <label htmlFor="'message">Message</label>
        <textarea name="message" id="message" defaultValue={props.message} />
      </div>
      <input className="btn formBtn" type="submit" value="SEND 💘" />
    </form>
  );
};

export default Form;
