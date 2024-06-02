"use client"

import React, { useEffect, useState } from 'react';

export default function Home() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [county, setCounty] = useState('');
    const [code, setCode] = useState('');
    const [state, setState] = useState('');
    const [sub, setSub] = useState('');

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            fetchCity(latitude, longitude);
        }
    }, [latitude, longitude]);


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.error("Geolocation is not supported by this browser.");
           
        }
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
        
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                window.alert("Please enable location services to view nearest places."); // Alert message
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
        }
       
    }

    function fetchCity(latitude, longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data)
                if (data.address.state_district) {
                    setCity(data.address.state_district);
                    setCountry(data.address.country);
                    setCounty(data.address.county);
                    setCode(data.address.postcode);
                    setState(data.address.state);
                    setSub(data.address.suburb);

                } else if (data.address && data.address.nearest) {
                    setCity(`Nearest cities: ${data.address.nearest.join(', ')}`);
                } else {
                    setCity('City not found');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setCity('Error occurred');
            });
    }

    

    return (
        <main>
            <h1 className='mt-[10rem] md:text-[2.5rem] text-[1.5rem] font-bold mb-[5rem] 
            bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 text-transparent
            flex flex-col justify-center items-center'>
              <div>{country}</div>
               <div>{state}</div>
               <div>{city}</div>
               <div>{county}</div>
               <div>{sub}</div>
               <div>{code}</div>
         
               
              </h1>
           
        </main>
    )}

