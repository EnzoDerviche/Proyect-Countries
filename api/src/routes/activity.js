const express = require("express")
const router = express.Router()
const {Activity} = require("../db")

router.post("/", async function (req, res) {
    const {name, dificulty, duration,season, alpha3Code} = req.body;

    const newActivity = await Activity.create({
        name,
        dificulty, 
        duration,
        season,
    })

    await alpha3Code && newActivity.setCountries(alpha3Code);
    res.send(newActivity);
}); 

module.exports = router;