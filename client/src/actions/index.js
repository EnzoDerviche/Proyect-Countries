import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const SORT_BY_POPULATION_DESC = "SORT_BY_POPULATION_DESC";
export const SORT_ALPHABETICALLY = "SORT_ALPHABETICALLY";
export const SORT_ALPHABETICALLY_REVERSE = "SORT_ALPHABETICALLY_REVERSE";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";

export const getCountries = () => {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/countries")
      .then((r) => r.data)
      .then((data) => {
        dispatch({ type: GET_COUNTRIES, payload: data });
      });
  };
};

export const getCountriesByName = (name) => {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then((r) => r.data)
      .then((data) => {
        dispatch({ type: GET_COUNTRIES_BY_NAME, payload: data });
      });
  };
};

export const getCountryDetail = (id) => {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((r) => r.data)
      .then((data) => {
        dispatch({ type: GET_COUNTRY_DETAIL, payload: data });
      });
  };
};

export const sortByPopulation = (payload) => {
  return {
    type: payload === "asc" ? SORT_BY_POPULATION : SORT_BY_POPULATION_DESC,
  };
};

export const sortAlphabetically = (payload) => {
  return {
    type: payload === "asc" ? SORT_ALPHABETICALLY : SORT_ALPHABETICALLY_REVERSE,
  };
};

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};
