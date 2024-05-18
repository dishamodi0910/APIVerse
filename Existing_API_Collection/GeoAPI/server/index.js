const express = require('express');
const app = express();
const axios = require("axios");
const path = require('path');
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get("/geocode", async function (req,res)
{
    const address = req.query.address;  
    try
    {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);

        if(response.data && response .data.length > 0)
        {
            const {lat,lon} = response.data[0];
            res.json({
                latitude: lat,
                longitude: lon
            });
        }
        else {
            res.status(404).json({
                msg: "Address not found"
            })
        }
    }
    catch(err)
    {
        console.error("Error fetching the geoCode", error);
        res.status(500).json({
            error: "Internal Server error"
        });
    }
});

app.get('/reverse-geocode', async (req, res) => {
    const { lat, lon } = req.query;

    // Check if lat and lon are not provided directly, but as comma-separated string
    if (!lat && !lon && req.query.coordinates) {
        const coordinates = req.query.coordinates.split(',');
        if (coordinates.length === 2) {
            lat = coordinates[0];
            lon = coordinates[1];
        }
    }
    
    try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        if (response.data && response.data.address) {
            res.json({ address: response.data.display_name });
        } else {
            res.status(404).json({ msg: "Coordinates not found" });
        }
    } catch (error) {
        console.error('Error fetching the address', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000);


