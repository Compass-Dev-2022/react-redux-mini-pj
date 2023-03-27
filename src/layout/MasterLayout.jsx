import React from "react";
import { connect } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import useToken from "../hooks/useToken";

import "./MasterLayout.scss";

import { logOut } from "../store/actions/authAction";
import { AUTHORIZATION } from "../constants";
const MasterLayout = ({ authenticated, logOut }) => {
  let navigate = useNavigate();
  let { token } = useToken();

  let handleLogOut = () => {
    logOut(navigate);
  };

  return (
    <div>
      <div className="header">
        <div>
          <p>GS</p>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>

              {authenticated?.username === AUTHORIZATION.username &&
                AUTHORIZATION.password && (
                  <li>
                    <NavLink to="/add" activeclassname="active">
                      Add
                    </NavLink>
                  </li>
                )}

              {!(authenticated || token) && (
                <li>
                  <NavLink to="/signin" activeclassname="active">
                    Sign In
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>

        {(authenticated || token) && (
          <div className="header__right">
            <p>{authenticated?.username}</p>
            {(authenticated || token) && (
              <span onClick={handleLogOut}>Log out</span>
            )}
          </div>
        )}
      </div>

      <div className="section__wrapper">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state?.authenticatedUser?.authenticatedUser,
});
const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterLayout);
