let data=[]
const saveData=(originalUrl,shortUrlWithBase)=>{
    let datas={originalUrl:originalUrl,time:new Date().toISOString(),shortUrl: shortUrlWithBase}
    data.push(datas)
    console.log(data)
    return datas
}
const filterData=(url)=>{
    let datas=data.find(item=>item. shortUrl===url)
    return datas
}
const filterOriginalURL=(url)=>{
    let datas=data.find(item=>item.originalUrl===url)
    return datas
}
module.exports={saveData,filterData,filterOriginalURL}