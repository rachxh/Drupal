import React, { Component } from "react";
import axios from "axios";

import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import EditForm from "./components/EditForm";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
    data: [],
    updatePopup: false,
    currentNote: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:3010/notes")
      .then((res) => this.setState({ data: res.data }));
  }

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popUpHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  submitHandler = () => {
    axios
      .post("http://localhost:3010/notes", this.state.inputData)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("error", error));

    this.closeHandler();
  };

  deleteHandler = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: notes });
    });
  };

  updateHandler = (item) => {
    this.setState({ updatePopup: true, currentNote: item });
  };

  inputUpdateHandler = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };

  updatePutHandler = (id) => {
    axios
      .put(`http://localhost:3010/notes/${id}`, this.state.currentNote)
      .then((res) => console.log(res.data));
  };

  render() {
    return (
      <>
        <div className="form_area">
          {this.state.updatePopup && (
            <EditForm
              {...this.state.currentNote}
              change={this.inputUpdateHandler}
              submit={() => this.updatePutHandler(this.state.currentNote.id)}
            />
          )}

          <Form change={this.inputHandler} submit={this.popUpHandler} />
          <View {...this.state.inputData} />
        </div>
       
        {this.state.showPopup && (
          <Popup
            close={this.closeHandler}
            {...this.state.inputData}
            submit={this.submitHandler}
          />
        )}
      </>
    );
  }
}

export default App;
