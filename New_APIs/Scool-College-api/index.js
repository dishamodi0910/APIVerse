const express=require("express")
const app=express()
const cors=require('cors')
const {School,College}=require('./asset/data')
app.use(cors())
app.get("/",(req,res)=>{
    res.send({
        title:"school & college rating api",
        author:"sivaprasath2004",
        Routes:{
            school:{
                all:"/school",
                Specific_school_id:"/school/id/:id", 
                Specific_school_name:"/school/name/:name",
                Specific_school_city:"/school/city/:city",
                Specific_school_location:"/school/location/:location",
                Specific_school_rating:"/school/rating/:rating",
            },            
            college:{
                all:"/college",
                specific_college_id:"/college/id/:id",
                specific_college_name:"/college/name/:name",
                specific_college_city:"/college/city/:city",
                specific_college_location:"/college/location/:location",
                specific_college_rating:"/college/rating/:rating"
        },
        },
        school_count:"140+",
        college_count:"200+"
    })
}) 
app.get("/school",(req,res)=>{
    res.send(School)
})
app.get("/college",(req,res)=>{
    res.send(College)
})
app.get("/:category/:type",(req,res)=>{
    if(req.params.category==="school"){
        res.send(School)
    }
    else if(req.params.category==="college"){  
        res.send(College)
    }
    else{
        res.send(`no results found on the ${req.params.category}`)
    }
})
app.get("/:category/:type/:data",(req,res)=>{
    if(req.params.category==="school"){
      let finder=School.filter((item)=> req.params.type=="id"?item[req.params.type]==req.params.data:item[req.params.type].toLowerCase()==req.params.data.toLowerCase())
      if(finder.length>0){
        res.send(finder)
      }
      else{
        res.send("no more match results")
      }  
    }
    else if(req.params.category==="college"){  
            let finder=College.filter((item)=> req.params.type=="id"?item[req.params.type]==req.params.data:item[req.params.type].toLowerCase()==req.params.data.toLowerCase())
            if(finder.length>0){
              res.send(finder)
            }
            else{
              res.send("no more match results")
            }  
    }else{
        res.send(`no results found on the ${req.params.category}`)
    } 
}) 
app.listen(5000,()=>{console.log('app listen in 5000')})