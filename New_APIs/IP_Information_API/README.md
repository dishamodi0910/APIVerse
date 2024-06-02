# Description
This is the API for getting the information from the IP address without using any third party paid API you can use this API for getting information of Public IP addresses.

# API Endpoints
## GET ipinf/:ip/geoip
Get information about IP

# Getting Started
## Pre-Requisites
- NodeJs

# Steps to Run
1. Clone the Repository and Nevigate to the main directory **IP_Information_API**
    
    cd New_APIs

    cd IP_Information_API

2. install the dependency

    npm i

3. start the server using node or nodemon

    node server.js  or  nodemon server.js

4. go to the Browser and type this URL

    http://localhost:3000/ipinf/8.8.8.8/geoip

    instead of 8.8.8.8 you can use any public IP.


5. Range For Cheacking the IP

    **Summary of IPv4 Classes**

                        Public IP Range                        Private IP Range
    Class A	          1.0.0.0 to 127.0.0.0	              10.0.0.0 to 10.255.255.255
    Class B	          128.0.0.0 to 191.255.0.0	          172.16.0.0 to 172.31.255.255
    Class C	          192.0.0.0 to 223.255.255.0	      192.168.0.0 to 192.168.255.255
