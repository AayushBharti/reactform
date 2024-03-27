import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = new useState("");
  // const [lastName, setLastName] = new useState("");

  // function changeFirstNameHandler(e) {
  //   // console.log(e.target.value);
  //   setFirstName(e.target.value);
  // }

  // function changeLastNameHandler(e) {
  //   // console.log(e.target.value);
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "",email: "" });
  // console.log(formData.email)

  function changeHandler(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData, //copying remaining feilds as it is
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="App">
      <form action="">
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
        />
        <br/>
        <br/>
        <br/>
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
        />
        <br/>
        <br/>
        <br/>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={changeHandler}
          name="email"
        />
      </form>
    </div>
  );
}

export default App;
