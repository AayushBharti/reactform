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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  // console.log(formData);

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData, //copying remaining feilds as it is
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault(); //preventing its default behaviour
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName} //controlled components - maintaing states inside components
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={changeHandler}
          name="email"
        />
        <br />
        <br />
        <br />
        <textarea
          name="comments"
          id=""
          cols="30"
          rows="10"
          onChange={changeHandler}
          placeholder="Enter your Comments here"
          value={formData.comments}
        />
        <br />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          // value={formData.isVisible} here this will not work
          checked={formData.isVisible}
        />
        {/* <label for="isVisible"> Am I visible?</label> */}
        {/* below one also works by clicking on label */}
        <label htmlFor="isVisible"> Am I visible?</label>

        <br />
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode"> Online Mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode"> Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Your Favourite Car </label>
        <select
          name="favCar"
          id=""
          onChange={changeHandler}
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fartuner">Fartuner</option>
          <option value="tharr">Tharr</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
        </select>

        <br />
        <br />
        {/* <input type="submit" value="Submit"/> */}
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default App;
