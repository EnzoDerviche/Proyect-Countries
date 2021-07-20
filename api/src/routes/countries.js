const express = require("express");
const router = require("express").Router();
const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const { name, page, order, continent } = req.query;
  try {
    if (name) {
      const countri = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: Activity,
      });
      countri && countri
        ? res.send(countri)
        : res.status(400).send("The country was not found");
    } else {
      const countries = await Country.findAll();
      if (countries.length > 0) {
        console.log("Countries de la database");
        return res.send(countries);
      } else {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );
        const country = response.data;
        const respuesta = mapCountries(country);
        var promises = await Promise.all(respuesta);
        console.log("countries creadas");
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const country = await Country.findByPk(id, { include: Activity });
    country && country
      ? res.send(country)
      : res.status(400).send("The country id were not found");
  } catch (err) {
    console.log(err);
  }
});

const mapCountries = (country) => {
  return (
    country &&
    country.map(async (country) => {
      let newCountry = await Country.create({
        id: country.alpha3Code,
        name: country.name,
        flag: country.flag,
        continent: country.region,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      });
    })
  );
};

module.exports = router;
