import React from "react";
import style from "./addActivity.module.css";
import Nav from "../Nav/Nav";
import {useSelector, useDispatch} from "react-redux";
import {getCountries} from "../../actions/index";

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
    errors.season = "Season is required"
  }
  else if (
    input.season !== "Verano" &&
    input.season !== "Otoño" &&
    input.season !== "Invierno" &&
    input.season !== "Primavera"
  ) {
    errors.season = "Season not valid";
  }
  return errors;
}

export default function AddActivities() {
  const country = useSelector((state) => state.countriesFiltered);
  const dispatch = useDispatch();

  const [input, setInput] = React.useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    alpha3Code: [],
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

  let array = [];
  const clickCountries = function (e) {
    array.push(e.target.value)
    console.log(array)
  }  

  React.useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let { name, dificulty, duration, season } = input;
      let body = { name, dificulty, duration, season, array };

      await fetch("http://localhost:3001/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      alert("done..!");
      setInput({
        name: "",
        duration: ""
      })
    } catch (err) {
      console.log(err.message);
    }
  }

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
              <select
                className={errors.dificulty && style.inputs}
                type="number"
                name="dificulty"
                onChange={handleInputChange}
                value={input.dificulty}
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
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
              <select
                  className={errors.season && style.inputs}
                  type="text"
                  name="season"
                  onChange={handleInputChange}
                  value={input.season}
              >
                <option value='Verano'>Verano</option>
                <option value='Invierno'>Invierno</option>
                <option value='Otoño'>Otoño</option>
                <option value='Primavera'>Primavera</option>
              </select>
              <div className={style.err}>
                {errors.season && <p className={style.danger}>{errors.season}</p>}
              </div>
            </div>
            <div className={style.group}>
              <label className={style.countries} htmlFor="countries">Countries:</label>
              <select multiple requires
                  className={style.inputs}
                  type="text"
                  name="countries"
              >
                {country &&
                country.map( (c) => (
                  <option onClick={clickCountries} value={c.id}>{c.name}</option>
                ))};
              </select>
            </div>
            <div>
              <p>{}</p>
            </div>
            <div>
              <button className={style.btn} type="submit">
                SUBMIT
              </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
