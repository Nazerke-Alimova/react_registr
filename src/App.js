import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid]=useState(false)

  // const handleFirstNameInputChange = (e) => {
  //   setValues({ ...values, firstname: e.target.value });
  // };
  // const handleLastNameInputChange = (e) => {
  //   setValues({ ...values, lastname: e.target.value });
  // };
  // const handleEmailNameInputChange = (e) => {
  //   setValues({ ...values, email: e.target.value });
  // };

  const handleInputChange =(e)=>{
    const{name, value}= e.target
    setInputValues({...inputValues, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValues.firstname && inputValues.lastname && inputValues.email){
      setValid(true)
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstname}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        {submitted && !values.firstname ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}

        <input
          onChange={handleLastNameInputChange}
          value={values.lastname}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        {submitted && !values.lastname ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}

        <input
          onChange={handleEmailNameInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  
  );


}

export default App;
