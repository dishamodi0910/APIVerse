import express from 'express'
import router from './routes.mjs';
const PORT = process.env.PORT||80;
const app = express();
app.use(express.json());
app.use(router);
app.listen(PORT,()=>{
    console.log("Runnong on port "+PORT);
})