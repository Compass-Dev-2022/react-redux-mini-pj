import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers, register } from "../../store/actions/authAction";
import { FiEyeOff, FiEye } from "react-icons/fi";
import "./SignUp.scss";
const SignUp = ({ register, getUsers, users }) => {
  let [password, setPassword] = useState(false);
  let [confirm_password, setConfirmPassword] = useState(false);
  let [errors, setErrors] = useState(null);
  let [auth, setAuth] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });
  let navigate = useNavigate();

  let handleChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };


  useEffect(() => {
    getUsers();
  }, []);

  const validate = () => {
    let errors_c = {};
    let isValid = true;
    let isUser = users.some(
      (e) => e.username === auth.username && e.password === auth.password
    );


    if (auth["username"].length === 0) {
      isValid = false;
      errors_c["username"] = "Please ente your username.";
    }

    if (auth["password"].length === 0) {
      isValid = false;
      errors_c["password"] = "Please ente your password.";
    }

    if (auth["confirm_password"].length === 0) {
      isValid = false;
      errors_c["confirm_password"] = "Please enter your confirm password.";
    }

    if (
      auth["password"].length !== 0 &&
      auth["confirm_password"].length !== 0
    ) {
      if (auth["password"] != auth["confirm_password"]) {
        isValid = false;
        errors_c["password_match"] = "confirm password is not matched";
      }
      if (isUser) { 
        isValid = false;
        errors_c["register"] = "User Account is already exist!";
      }
    }

    setErrors(errors_c);

    return isValid;
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();

    if (validate()) { 
      register(
        {
          username: auth.username,
          password: auth.password,
        },
        navigate
      );
      setAuth({ username: "", password: "", confirm_password: "" });
    }
  };


  let handlePassword = () => {
    setPassword(!password);
  };
  let handleConfirmPassword = () => {
    setConfirmPassword(!confirm_password);
  };

  return (
    <div className="form-wrapper_rg">
      {" "}
      <p className="desc_rg">Welcome to GS! </p>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="label1">Username</label>
          <div
            className={`input__gradient_rg ${
              errors && errors.username ? "bg__error" : "bg__success"
            }`}
          >
            <input
              type="text"
              value={auth.username || ""}
              onChange={handleChange}
              name="username"
              placeholder="Enter Username"
            />
          </div>
        </div>
        <div>
          <label htmlFor="label1">Password</label>

          <div
            className={`input__gradient_rg ${
              (errors && errors.password) || errors?.password_match
                ? "bg__error"
                : "bg__success"
            }`}
          >
            {password ? (
              <FiEyeOff className="password___icon" onClick={handlePassword} />
            ) : (
              <FiEye className="password___icon" onClick={handlePassword} />
            )}

            <input
              type={password ? "text" : "password"}
              value={auth.password || ""}
              onChange={handleChange}
              name="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div>
          <label htmlFor="label1">Confirm Password</label>

          <div
            className={`input__gradient_rg ${
              (errors && errors.confirm_password) || errors?.password_match
                ? "bg__error"
                : "bg__success"
            }`}
          >
            {confirm_password ? (
              <FiEyeOff
                className="password___icon"
                onClick={handleConfirmPassword}
              />
            ) : (
              <FiEye
                className="password___icon"
                onClick={handleConfirmPassword}
              />
            )}

            <input
              type={confirm_password ? "text" : "password"}
              value={auth.confirm_password || ""}
              onChange={handleChange}
              name="confirm_password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div>
          {errors &&
            Object?.values(errors).map((e) => (
              <p key={e} className="error">
                * {e}
              </p>
            ))}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state?.users?.users,
});
const mapDispatchToProps = {
  getUsers,
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
