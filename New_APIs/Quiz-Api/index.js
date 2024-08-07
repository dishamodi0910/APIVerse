 const express = require('express');
const Quizdata = require('./datas.json'); // Load quiz data
const cors=require('cors')
const app = express();
const mongoose=require('mongoose')
const Quiz=require('./mongodb/schema')
const PORT = process.env.PORT || 3000;
require("dotenv").config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// Routes 
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  
app.get('/',(req,res)=>{
    res.json({
        name:"Quiz Application API",
        author:"Sivaprasath2004",
        github:"https://github.com/sivaprasath2004",
        repository:'https://github.com/sivaprasath2004/Quiz-Api',
        category:['Geography','Literature','Science','History'],
        limit:'1 to 140',
        Routes:[
            {
                path:'/api/random',
                use:'random Question'
            },
            {
                path:'/api/:category',
                use:'specify category Question'
            },
            {
                path:'/api/:category/random',
                use:'specify category random Question'
            },
            {
                path:'/api/specific/:id',
                use:'specific Question'
            },
        ],
        text:'Happy coding :)'
    })
})
// random route
app.get('/api/random',async(req, res) => {
    let quizData=await Quiz.find() 
    let data= Math.floor(Math.random()*quizData.length)+1
   res.json(quizData[data]);
 });
//  category route
app.get('/api/:category',async(req, res) => {
    let quizData=await Quiz.find() 
    let filter=quizData.filter(ele=>ele.category.toLowerCase()===req.params.category.toLowerCase())
    if(filter){
    res.json(filter);
    }else{res.send("Invalid")}
 });
//  category with random
 app.get('/api/:category/random',async(req, res) => {
    let quizData=await Quiz.find() 
    let filter=quizData.filter(ele=>ele.category.toLowerCase()===req.params.category.toLowerCase())
    if(filter){
    let data= Math.floor(Math.random()*filter.length)+1
    res.json(quizData[data]);
    }else{res.send("Invalid")}
 });
//  specific question
 app.get('/api/specific/:id',async(req, res) => {
    let quizData=await Quiz.find() 
    console.log(req.params.id)
    let data=quizData.filter(ele=>ele.id==req.params.id)
    if(data){
    res.json(data);
    }
    else{
        res.send("Invalid")
    }
 });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
