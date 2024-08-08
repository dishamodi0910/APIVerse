# Description
This is the API for Translate the English words and paragraph to the Hindi Language without any third party API. From help of this API we can Translate very large number of words to the hindi there is no limit of size of the content.

# API Endpoints
## POST : /api/translate
in POST method we have to give the data at this way
post request Example: 

{
  "text": "You may Enter any Text to Translate",
  "source_language": "en",  
  "target_language": "hi"
}

# Getting Started
## Pre-Requisites
- NodeJs
- python

# Steps to Run
1. Clone the Repository and Nevigate to the directory **Language_Translate**

    cd New_APIs

    cd Language_Translate

2. Install the dependency

    - npm i

    for python library:

    - pip install transformers torch

3. Start the server using node

    - cd src
    - node app.js

4. go to the postman or any API tester like Thunder Client ( Of Vs code)

    - type this URL in the request type of POST method
    
         http://localhost:3000/api/translate

    - Add the JSON data like This

        {
            "text": "You may Enter any Text to Translate",
            "source_language": "en",  
            "target_language": "hi"
        }

    - You will get Response like This in the JSON Format

        {
            "translated_text": "अनुवाद करने के लिए आप कोई पाठ दाखिल कर सकते हैं"
        }

5. For Convert Text to Hindi you have to wait some time after sending the request. It will take some time for convert the data.


