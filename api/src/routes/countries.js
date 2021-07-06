const express = require('express');
const router = require('express').Router();
const { Country, Activity } = require('../db');
const e = require('express');


router.get("/", (req, res) => {
    res.json([
    {   
        id: 1,
        name: 'Argentina',
        continent: 'America',
        flag: "https://restcountries.eu/data/arg.svg",
    },
    {   
        id: 2,
        name: 'Brazil',
        continent: 'America',
        flag: "https://restcountries.eu/data/bra.svg",
    },
    {   
        id: 3,
        name: 'Chile',
        continent: 'America',
        flag: "https://restcountries.eu/data/chl.svg",
    },
    {   
        id: 4,
        name: 'Paraguay',
        continent: 'America',
        flag: "https://restcountries.eu/data/pry.svg",
    },
    {   
        id: 5,
        name: 'Colombia',
        continent: 'America',
        flag: "https://restcountries.eu/data/col.svg",
    },
    {   
        id: 6,
        name: 'España',
        continent: 'Europa',
        flag: "https://restcountries.eu/data/esp.svg",
    },
    {   
        id: 7,
        name: 'Venezuela',
        continent: 'America',
        flag: "https://restcountries.eu/data/ven.svg",
    },
    {   
        id: 8,
        name: 'Portugal',
        continent: 'Europa',
        flag: "https://restcountries.eu/data/prt.svg",
    },
    {   
        id: 9,
        name: 'China',
        continent: 'Asia',
        flag: "https://restcountries.eu/data/chn.svg",
    },
    {   
        id: 10,
        name: 'Peru',
        continent: 'America',
        flag: "https://restcountries.eu/data/per.svg",
    },

])
})




module.exports = router;