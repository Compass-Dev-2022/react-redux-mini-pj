import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getGames, addGame } from "../store/actions/gameAction";
import Home from "../components/Home/Home";

const HomePage = ({ games, getGames }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getGames(signal);

    return () => {
      abortController.abort();
    };
  }, []);
  return (
  <>
      <Home />
      
      

    </>
  );
};
const mapStateToProps = (state) => ({
  users: state.users,
  games: state.games,
});

const mapDispatchToProps = {
  getGames,
  addGame,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
