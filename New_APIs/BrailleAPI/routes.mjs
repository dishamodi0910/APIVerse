import { Router } from "express";
import { bodyCheckMiddleWare } from "./middlewares.js";
import data from "./data.mjs";
const router  = Router();

function getWords(text){
    let word = "";
    let num="";
    let words = [];
    //console.log(text);
    for(var i=0;i<text.length;i++){
        var ch = text[i];
        var ascii = text.charCodeAt(i);
        //console.log(ch,ascii);
        if((ascii>=48)&&(ascii<=57)){
            //console.log(num);
            if(word.length>0){
                word = word.toLocaleUpperCase();
                words=[...words,word];
                word="";
            }
            num+=(ch);
        }else{
            //console.log(word);
            if(num.length>0){
                words=[...words,num];
                num="";
            }
            word+=ch;
        }
    }
    if(word.length>0){
        word = word.toLocaleUpperCase();
        words=[...words,word];
        word="";
    }
    if(num.length>0){
        words=[...words,num];
        num="";
    }
    //console.log(words);
    return words;
}

function convertToBraille(words){
    let braille = "";
    for(var i in words){
        let word = words[i];
        if((word.charCodeAt(0)>=48)&&(word.charCodeAt(0)<=57)){
            braille+=data["#"];
            for(var j in word){
                let ch = word[j];
                let a = ch.charCodeAt()-48+64;
                if(a==64){
                    a=74;
                }
                let c= String.fromCharCode(a);
                braille+=data[c];
            }
            braille+="⠰";
        }else{
            for(var j in word){
                let ch = word[j];
                braille+=data[ch];
            }
        }
    }
    console.log(braille);
    return braille;
}

router.post('/toBraille',bodyCheckMiddleWare,(request,response)=>{
    const {body} = request;
    const text = body.text;
    let words = getWords(text);
    let result = convertToBraille(words);
    return response.status(200).send({result:result});
})

router.post('/toEnglish',bodyCheckMiddleWare,(request,response)=>{
    const {body} = request;
    const text = body.text;
    let english="";
    let flag=0;
    for(var i in text){
        var ch = text[i];
        if(ch=="⠼"){
            flag=1;
            continue;
        }
        if(ch=="⠰"){
            flag=0;
            continue;
        }
        if(!flag){
            english+=data[ch];
        }else{
            let a = data[ch].charCodeAt()-64+48;
            console.log(a);
            if(a==58){
                a=48;
            }
            english+=String.fromCharCode(a);
        }
    }
    return response.status(200).send({result:english});
})

export default router;