import React from "react";
import "./Card.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { connect } from "react-redux";
import { deleteGame } from "../../store/actions/gameAction";
import { AUTHORIZATION } from "../../constants";
const Card = ({ authenticated, p, deleteGame }) => {
  return (
    <div className="card">
      {authenticated?.username === AUTHORIZATION.username &&
        AUTHORIZATION.password && (
          <TiDeleteOutline
            className="delete_outline"
            onClick={() => deleteGame(p)}
          />
        )}

      <img src={p.img_url} alt={p.img_url} width="20%" />

      <div className="card__title">
        <p>{p.name}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state?.authenticatedUser?.authenticatedUser,
});
const mapDispatchToProps = {
  deleteGame,
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
