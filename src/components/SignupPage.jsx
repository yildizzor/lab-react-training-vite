import React from "react";
import { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const sayHello = () => {
    if (nationality === "en") {
      return "Hello";
    } else if (nationality === "de") {
      return "Hallo";
    } else if (nationality === "fr") {
      return "Bonjour";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div >
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Email</label>
        <input
          className={
            "form-control " + (email.includes("@") ? "is-valid" : "is-invalid")
          }
          aria-describedby="emailFeedback"
          type="email"
          id="name"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="valid-feedback">You typed a valid email!</div>
        <div id="emailFeedback" className="invalid-feedback">
          You typed an invalid email.
        </div>
        <label htmlFor="password">Password</label>
        <input
          className={
            "form-control " +
            (password.includes("?") && password.length >= 6
              ? "is-valid"
              : "is-invalid")
          }
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-describedby="passwordFeedback"
        />
        <div className="valid-feedback">Your password is strong.</div>
        <div id="passwordFeedback" className="invalid-feedback">
          Your password is too weak.
        </div>
        <label htmlFor="nationality">Nationality</label>
        <select
          className="form-control"
          name="nationality"
          id="nationality"
          value={nationality}
          onChange={(event) => setNationality(event.target.value)}
        >
          <option value="other"></option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <br />
        <button className="submit-button">Submit</button>
      </form>
      <div className="form">

    
      <p>{sayHello()}</p>
      <p>Your mail adres is {email}</p>
      <p>Your mail adres is correct</p>

      </div>
    </div>
  );
}

export default SignupPage;
