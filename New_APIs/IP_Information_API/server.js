const express = require('express');
const maxmind = require('maxmind');
const dns = require('dns');
const path = require('path');
const { promisify } = require('util');
const validator = require('validator');

const app = express();
const port = 3000;

// Promisify the dns.reverse function
const reverseLookup = promisify(dns.reverse);

// Path to the GeoLite2 City database
const dbPath = path.join(__dirname, 'GeoLite2-City.mmdb'); // Adjust the path as needed

let geoLookup;

// Load the database
maxmind.open(dbPath).then((result) => {
  geoLookup = result;
  console.log('GeoLite2 database loaded.');
}).catch((error) => {
  console.error('Error loading GeoLite2 database:', error);
});

// Middleware to check if the database is loaded
app.use((req, res, next) => {
  if (!geoLookup) {
    return res.status(503).json({ error: 'GeoLite2 database not loaded yet' });
  }
  next();
});

// Route to get geolocation information
app.get('/ipinf/:ip/geoip', async (req, res) => {
  const ipAddress = req.params.ip;

  // Validate the IP address
  if (!validator.isIP(ipAddress)) {
    return res.status(404).json({
      status: 404,
      error: {
        title: 'Wrong ip',
        message: 'Please provide a valid IP address'
      }
    });
  }

  const geoData = geoLookup.get(ipAddress);

  // Check if geolocation data is available
  if (!geoData) {
    return res.json({
      ip: ipAddress,
      bogon: true
    });
  }

  let hostname = 'N/A';

  try {
    // Perform reverse DNS lookup to get the hostname
    const hostnames = await reverseLookup(ipAddress);
    if (hostnames.length > 0) {
      hostname = hostnames[0];
    }
  } catch (error) {
    if (error.code !== 'ENOTFOUND') {
      console.error('Error performing reverse DNS lookup:', error);
    }
  }

  const result = {
    ip: ipAddress,
    hostname: hostname, // IP address hostname
    city: geoData.city ? geoData.city.names.en : 'N/A',
    region: geoData.subdivisions && geoData.subdivisions.length > 0 ? geoData.subdivisions[0].names.en : 'N/A',
    country: geoData.country ? geoData.country.names.en : 'N/A',
    loc: geoData.location ? `${geoData.location.latitude},${geoData.location.longitude}` : 'N/A',
    org: geoData.traits ? geoData.traits.organization : 'N/A',
    postal: geoData.postal ? geoData.postal.code : 'N/A',
    timezone: geoData.location ? geoData.location.time_zone : 'N/A',
  };

  res.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`GeoIP service running at http://localhost:${port}`);
});
