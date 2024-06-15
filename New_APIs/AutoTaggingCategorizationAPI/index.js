const {tags }= require('./tags.js')
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
app.use(express.json());
app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})
const getTagsForText = (text) => {
    const lowerText = text.toLowerCase();
    const detectedTags = [];
  
    for (const [tag, keywords] of Object.entries(tags)) {
      for (const keyword of keywords) {
        if (lowerText.includes(keyword)) {
          detectedTags.push(tag);
          break; // Move to the next tag if any keyword is found
        }
      }
    }
  
    return detectedTags;
};
app.post('/getTags',(request,response)=>{
    const {body} = request;
    if(!body){
        return response.status(400).send({msg:"Data body is required"});
    }else{
        const text = body.text;
        if(!text){
            return response.status(400).send({msg:"text field is required"});
        }else{
            const list = getTagsForText(text);
            return response.status(200).send({result:list});
        }
    }
})  