import React from "react";
import style from "./activity.module.css";
import Nav from "../Nav/Nav";

export function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Name is required";
  }

  if (!input.dificulty) {
    errors.dificulty = "Dificulty is required";
  } else if (input.dificulty > 5 || input.dificulty < 1) {
    errors.dificulty = "The difficulty must be between 1 to 5";
  }

  if (!input.duration) {
    errors.duration = "Duration is required";
  } else if (input.duration < 1) {
    errors.duration = "The duration has to be longer than 1 hour";
  }

  if (!input.season) {
    errors.season = "Season is required";
  } else if (
    input.season !== "Verano" ||
    input.season !== "Otoño" ||
    input.season !== "Invierno" ||
    input.season !== "Primavera"
  ) {
    errors.season = "Season not valid";
  }
  console.log(errors);
  return errors;
}

export default function Activity() {
  const [input, setInput] = React.useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className={style.padre}>
        <div>
          <h1>Add activity</h1>
        </div>
        <div className={style.forms}>
          <form onSubmit={handleSubmit}>
            <div className={style.group}>
              <label className={style.labels} htmlFor="name">Name:</label>
              <input
                className={errors.name && style.inputs}
                type="text"
                name="name"
                onChange={handleInputChange}
                value={input.name}
              />
              <div className={style.err}>
                {errors.name && <p className={style.danger}>{errors.name}</p>}
              </div>           
            </div>
            <div className={style.group}>
              <label className={style.labels} htmlFor="dificulty">Dificulty:</label>
              <input 
                className={errors.dificulty && style.inputs}
                type="number"
                name="dificulty"
                onChange={handleInputChange}
                value={input.dificulty}
              />
              <div className={style.err}>
                {errors.dificulty && <p className={style.danger}>{errors.dificulty}</p>}
              </div>
            </div>
            <div className={style.group}>
              <label className={style.labels} htmlFor="duration">Duration:</label>
              <input
                className={errors.duration && style.inputs}
                type="number"
                name="duration"
                onChange={handleInputChange}
                value={input.duration}
              />
              <div className={style.err}>
                {errors.duration && <p className={style.danger}>{errors.duration}</p>}
              </div>
            </div>
            <div className={style.group}>
              <label className={style.labels} htmlFor="season">Season:</label>
              <input
                  className={errors.season && style.inputs}
                  type="text"
                  name="season"
                  onChange={handleInputChange}
                  value={input.season}
              />
              <div className={style.err}>
                {errors.season && <p className={style.danger}>{errors.season}</p>}
              </div>
            </div>
          </form>
        </div>
        <div>
              <button
                type="submit"
              >
                SUBMIT
              </button>
            </div>
      </div>
    </div>
  );
}
