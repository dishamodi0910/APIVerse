const app = require('./app');

const port = 3000;

app.listen(port,()=>{
    console.log("connected to port : http://localhost:"+port);
})