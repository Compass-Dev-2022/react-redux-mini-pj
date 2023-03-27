import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login, getUsers } from "../../store/actions/authAction";
import useToken from "../../hooks/useToken";

import { FiEyeOff, FiEye } from "react-icons/fi";
import "./Signin.scss"



const SignIn = ({users,getUsers,login}) => {
  const navigate = useNavigate();




  const { setToken } = useToken();
  let [password, setPassword] = useState(false);

  let [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  let [errors, setErrors] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  let handleChange = (e) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  let handlePassword = () => {
    setPassword(!password);
  };

  const validate = () => {
    let errors_c = {};
    let isValid = true;
    let isUser = users.some(
      (e) => e.username === auth.username && e.password === auth.password
    );

    if (auth["username"].length === 0) {
      isValid = false;
      errors_c["username"] = "Please enter your username.";
    }
    if (auth["password"].length === 0) {
      isValid = false;
      errors_c["password"] = "Please enter your password.";
    }

    if (auth["username"].length !== 0 && auth["password"].length !== 0) {


      if (!isUser) {
        isValid = false;
        errors_c["register"] =
          "Don't have your account,please make registeration?";
      }
    }

    setErrors(errors_c);

    return isValid;
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      login(auth, navigate, setToken);
      setAuth({ username: "", password: "" });
    }
  };

  return (
    <div className="form-wrapper">
      <p className="desc">Welcome Back GS! </p>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="label1">Username</label>
          <div
            className={`input__gradient ${
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
            className={`input__gradient ${
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
          <div className="register__link">
            <Link to="/signup">register</Link>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state?.users?.users,
});
const mapDispatchToProps = {
  getUsers,
  login
};

export default  connect(mapStateToProps, mapDispatchToProps) (SignIn);
