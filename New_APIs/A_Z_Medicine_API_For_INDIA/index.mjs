import express from 'express'
import router from './routes.mjs';
const app = express();
app.use(express.json());
app.use(router);
const PORT = process.env.PORT||80;
app.listen(PORT,()=>{
    console.log("Running on port "+PORT);
})