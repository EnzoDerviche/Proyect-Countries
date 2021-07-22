const express = require("express");
const router = require("express").Router();
const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const countri = await Country.findAll({ //traemos todos los countries
        where: { name: { [Op.iLike]: `%${name}%` } }, //comprobamos que el nombre sea el mismo que el del query y se incluye la tabla de actividades
        include: Activity,
      });
      countri && countri
        ? res.send(countri)
        : res.status(400).send("The country was not found");
    } else {
      const countries = await Country.findAll();
      if (countries.length > 0) { //verifica si hay paises ya cargados en la db, sino hace el pedido a la api y los carga
        console.log("Countries de la database");
        return res.send(countries);
      } else {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );
        const country = response.data;
        const respuesta = mapCountries(country);
        var promises = await Promise.all(respuesta); //resuelve las promesas(no se porque me daba promesas pending)
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
    const country = await Country.findByPk(id, { include: Activity }); //busca por el elemento que se le pase, en este caso por el id
    country && country
      ? res.send(country)
      : res.status(400).send("The country id were not found");
  } catch (err) {
    console.log(err);
  }
});

const mapCountries = (country) => { //crea y mapea los countries con la informacion que le llega por el axios.get
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
