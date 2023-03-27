import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addGame} from "../../store/actions/gameAction"
const AddGameForm = ({addGame}) => {

    const navigate =useNavigate()
  let [game, setGame] = useState({
    name: "",
    img_url: "",
  });
  let [errors, setErrors] = useState(null);


  const validate = () => {
    let errors_c = {};
    let isValid = true;
  

    if (game["name"].length === 0) {
      isValid = false;
      errors_c["name"] = "Please Enter Game Name.";
    }
    if (game["img_url"].length === 0) {
      isValid = false;
      errors_c["img_url"] = "Please Enter Game Image Url.";
    }

    setErrors(errors_c);

    return isValid;
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      addGame(game, navigate);
    }
  };
  return (
    <div className="form-wrapper">
    <p className="desc">Add Game Form </p>
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="label1">Name</label>
        <div
          className={`input__gradient ${
            errors && errors.name ? "bg__error" : "bg__success"
          }`}
        >
          <input
            type="text"
            value={game.name || ""}
            onChange={handleChange}
            name="name"
            placeholder="Enter Game Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="label1">Image Url</label>
        <div
          className={`input__gradient ${
            errors && errors.img_url ? "bg__error" : "bg__success"
          }`}
        >
          <input
            type="text"
            value={game.img_url || ""}
            onChange={handleChange}
            name="img_url"
            placeholder="Enter Game Image Url"
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

      <button type="submit">Add</button>
    </form>
  </div>
  )
}

const mapDispatchToProps = {
    addGame
}

export default connect(null,mapDispatchToProps) (AddGameForm)