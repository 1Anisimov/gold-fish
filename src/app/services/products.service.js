// import { getAllProducts, getNotSaleProducts, getProductByIdApi, getSaleProducts } from "../../API/FakeAPI";
import httpService from "./http.service";


const productsEndpoint = "product/";
const saleProductsEndpoint = "saleProducts/";
const specialProductsEndpoint = "specialProducts/";


const productsService = {
    create: async (payload) => {
        const { data } = await httpService.put(productsEndpoint + payload.id, payload);
        return data;
    },
    get: async () => {
        // const data = await getAllProducts();
        const {data}  = await httpService.get(productsEndpoint)
        // console.log(data)
        return data.content;
    },
    getAllSaleProducts: async () => {
        const {data}  = await httpService.get(saleProductsEndpoint)
        return data.content;
    },
    getAllSpecialProducts: async () => {
        const {data}  = await httpService.get(specialProductsEndpoint)
        console.log(data.content)
        return data.content;
    },
    getProductById: async (productId) => {
        const { data } = await httpService.get(productsEndpoint);
        return data.find((p) => p.id === productId)
        // return data;
    }
}

export default productsService;