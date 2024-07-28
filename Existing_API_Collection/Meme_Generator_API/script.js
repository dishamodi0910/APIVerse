const btn=document.querySelector(".meme-gen");
const meme=document.querySelector(".cont img");
const mtitle=document.querySelector(".title");
const mauthor=document.querySelector(".author");
const sh=document.querySelector(".meme-share");
let s_data=null;

const update=(url,title,author) => {
    meme.setAttribute("src",url);
    mtitle.innerHTML=title;
    mauthor.innerHTML=`Meme by : ${author}`;
    // s_data=url;
};

const genmeme=() => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json()).then((data)=>{
        update(data.url,data.title,data.author);
    s_data=data.url;
    });
};

genmeme();

function sharem(){
    if(navigator.share!==undefined){
        navigator.share({
            title:"Meme generator",
            text:"Meme",
            url:s_data,
        })
        .then(()=>console.log("Successful share")).catch((error)=>console.log("Error",error))
    }
}

btn.addEventListener("click",genmeme);
sh.addEventListener("click",sharem);



