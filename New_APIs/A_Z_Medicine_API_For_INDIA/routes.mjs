import { Router} from "express";
import pkg from './middleware.js'
const {searchByPriceMiddleware, searchByManufacturerMiddleware, searchByNameMiddleware } = pkg;
import data from "./data.mjs";

const router = Router();

router.get('/searchByName',searchByNameMiddleware,(request,response)=>{
    const {query} = request;
    const name = query.name;
    console.log(name);
    const list = data.filter(item=> item.name.toLowerCase().trim().replaceAll(" ","")==name)
    return response.status(200).send({result:list});
})

router.get('/searchByManufacturer',searchByManufacturerMiddleware,(request,response)=>{
    const {query} = request;
    const manufacturer = query.manufacturer;
    console.log(manufacturer);
    const list = data.filter(item=> item.manufacturer_name.toLowerCase().trim().replaceAll(" ","")==manufacturer)
    return response.status(200).send({result:list});
})

router.get('/AllDiscontinued',(request,response)=>{
    const list = data.filter(item=> item.Is_discontinued=="TRUE");
    return response.status(200).send({result:list});
})

router.get('/searchByPrice',searchByPriceMiddleware,(request,response)=>{
    const {query} = request;
    const price = parseFloat(query.price);
    const list = data.filter(item=> item.price==price);
    return response.send({result:list});
})

router.get('/searchByPriceUnder',searchByPriceMiddleware,(request,response)=>{
    const {query} = request;
    const price = parseFloat(query.price);
    const list = data.filter(item=> item.price<price);
    return response.send({result:list});
})

router.get('/searchByPriceAbove',searchByPriceMiddleware,(request,response)=>{
    const {query} = request;
    const price = parseFloat(query.price);
    const list = data.filter(item=> item.price>price);
    return response.send({result:list});
})



export default router;