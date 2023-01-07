import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import Btn from "../custom-btn/btn.component";
import { googleSigninStart, signinStart } from "../../redux/user/user-actions";
import { connect } from "react-redux";

const SignIn = ({ signinStart, googleStart }) => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const { email, password } = creds;
  const handleSubmit = async (e) => {
    e.preventDefault();

    signinStart({ email, password });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">Sign In</h2>
      <span className="subtitle">I already have an account</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email"
          onChange={handleChange}
          value={email}
          type="email"
          required
        />
        <FormInput
          name="password"
          label="Password"
          onChange={handleChange}
          value={password}
          type="password"
          required
        />
        <div className="buttons">
          <Btn type="submit">SIGNIN</Btn>
          <Btn google type="button" onClick={googleStart}>
            SIGNIN WITH GOOGLE
          </Btn>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleStart: () => dispatch(googleSigninStart()),
  signinStart: (creds) => dispatch(signinStart(creds)),
});

export default connect(null, mapDispatchToProps)(SignIn);
