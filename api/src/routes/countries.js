const express = require('express');
const router = require('express').Router();
const { Country, Activity } = require('../db');
const axios = require('axios');

router.get("/", async (req, res) => {
    try {
        const countries = await Country.findAll();
        if (countries.length > 0) {
            console.log('Countries de la database')
            return res.send(countries);
        } else {
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
            const country = response.data;
            const respuesta = mapCountries(country);
            var promises = await Promise.all(respuesta);
            console.log('countries creadas')
        }
    } catch (err) {
        console.log(err);
    }
});

router.get("/:id", async (req, res)=>{
    const{id}=req.params;
    try{
        const country = await Country.findByPk(id,{include:Activity});
        if(country){
            return res.send(country);
        } else {
            return res.status(400).send("The country id were not found");
        }
    } catch (err) {
        console.log(err);
    }
})

const mapCountries = (country) => {
    return country && country.map(async(country) => {
        let newCountry = await Country.create ({
            id : country.alpha3Code,
            name: country.name,
            flag: country.flag,
            continent: country.region,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population
        });
    })
}

module.exports = router;