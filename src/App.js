import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { getData } from "./redux/action/student";
import { connect } from "react-redux";

function App(props) {
  const getData = () => {
    props.getData();
  };
  return (
    <div className="App">
      {/* <button onClick={getData}>
        Click Me
      </button> */}

      <button onClick={getData}>Click Me</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};
export default connect(null, mapDispatchToProps)(App);
