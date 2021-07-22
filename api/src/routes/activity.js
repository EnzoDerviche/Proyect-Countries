const express = require("express")
const router = express.Router()
const {Activity} = require("../db")

router.post("/", async function (req, res) {
    const {name, dificulty, duration,season, array} = req.body;

    const newActivity = await Activity.create({ //creamos nueva actividad con los valores llegados
        name,
        dificulty, 
        duration,
        season,
    })

    await newActivity.addCountries(array); //verifica que tenga el id y setea la actividad en el country
    res.send(newActivity); //devuelve la actividad creada
}); 

module.exports = router;