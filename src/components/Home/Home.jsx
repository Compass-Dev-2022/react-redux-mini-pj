import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import "./Home.scss";
import { getGames } from "../../store/actions/gameAction";

const Home = ({ games, getGames }) => {
  const [search, setSearch] = useState({
    q: "",
    filterA: games || [],
  });
  useEffect(() => {
    getGames();
  }, []);


  let handleChangeSearchFilter = (e) => {
    let filterA = games?.filter((game) => {
      if (e.target.value === "") return games;
      return game.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearch({
      q: e.target.value,
      filterA: filterA,
    });
  };

  return (
    <div className="game__lists">
      <input
        type="type"
        value={search.q}
        onChange={handleChangeSearchFilter}
        placeholder="Search...."
      />
      <div className="game__grid">
        {search?.q === ""
          ? games?.map((p, i) => <Card p={p} key={i} />)
          : search?.filterA?.map((p, i) => <Card p={p} key={i} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  games: state?.games?.games,
});
const mapDispatchToProps = {
  getGames,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
