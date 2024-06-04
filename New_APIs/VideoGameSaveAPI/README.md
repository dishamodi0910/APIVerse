# Video Game SaveData Management API

Facilitates management of video games' save data for implementation of cloud save feature for any video game. You can add new savedata, fetch all savedata fetch one save data using email of the user. For updation, deletion and retrieval of a single user the client only needs to provide the user email this is done for convinience as id of the savedata will have to be kept in a separate database otherwise.

# Base URL

http://localhost:8080/

# Endpoints


## Get All savedata

***GET /api/v1/saves***

- fetches all the savedata present in the database


## Get one savedata

***GET /api/v1/save***


- **The Email should be present in the request body like this:**

```
{
    "userEmail":"[your user email]"
}
```


## Add one savedata

***Post /api/v1/save***

- **The Body of the request should contain username,email as well as savedata object**

```
{
    "username":"[any user name]"
    "userEmail":"[your users email]",
    "savedata":"{
        "property1":"value1"
        "property2":"value2"
    }"
}
```
- **for example:**

```
{
    "username":"Stiffpixels",
    "userEmail": "muzammil@example.com",
    "saveData": {
        "playerName": "Stiffpixels",
        "lastSaved": "04 06 2024",
        "currentLevel": "Anor Londo"
    }
}
```


## Update one savedata

***PUT /api/v1/save***


- **The Body should container the email along with the savedata object**

```
{
    "userEmail":"[your users email]",
    "savedata":"{
        "property1":"value1"
        "property2":"value2"
        //and so on
    }"
}
```

## Delete One savedata

***DELETE /api/v1/save***

- **Provide the user email like in the case of get one savedata request**