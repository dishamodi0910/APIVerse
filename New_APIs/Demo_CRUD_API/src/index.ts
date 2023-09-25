const express = require('express');
const dotenv = require('dotenv');
import { NextFunction, Request, RequestHandler, Response } from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());    //Middleware

let users = [ 
    {
        "id":1,
        "name" : 'Johnny1'
    },
    {
        "id":2,
        "name" : 'Johnny2'
    },
    {
        "id":3,
        "name" : 'Johnny3'
    }
];

//READ USERS
app.get("/user",(req : Request,res : Response) => {
    res.json(users);
});

//CREATE USER
app.post("/user",(req : Request,res : Response) => {
    const newUser = {
        name : req.body.name,
        id:Date.now(),
    };
    users.push(newUser);
    res.json(users);
});

//UPDATE
app.put("/user",(req : Request,res : Response) => {
    const {id,name} = req.body;
    users = users.map((user : any) => {
        if(user.id === id){
            user.name = name;
        }
        return user;
    });
});

//DELETE
app.delete("/user/:id",(req : Request,res : Response) => {
    const {id} = req.params;
    users = users.filter((user : any) => user.id !== Number(id));
    res.json(users);
});

const isAuthorized:RequestHandler = (req : Request,res : Response,next : NextFunction) => {
    const authHeader = req.headers.authorization;
    if(authHeader ==='gdscdemocrudapi')
    {
        next();
    }
    else
    {
        res.status(401);
        res.json({ msg : 'NO access'});
    }
}

//GET USER BY ID
app.get("/user/:id", isAuthorized, (req : Request,res : Response) => {
    const {id} = req.params;
    const user = users.find((user : any) => user.id === Number(id));
    res.json(user);
});

//Start the app
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

