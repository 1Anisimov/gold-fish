// import { getAllProducts, getNotSaleProducts, getProductByIdApi, getSaleProducts } from "../../API/FakeAPI";
import httpService from "./http.service";


const productsEndpoint = "product/";
const saleProductsEndpoint = "saleProducts/";
const specialProductsEndpoint = "specialProducts/";


const productsService = {
    create: async (payload) => {
        const { data } = await httpService.put(productsEndpoint + payload.id, payload);
        console.log("CREATE", data)
        return data;
    },
    get: async () => {
        // const data = await getAllProducts();
        const {data}  = await httpService.get(productsEndpoint)
        // console.log(data)
        return data.content;
    },
    addToSale: async (payload) => {
        const { data } = await httpService.put(saleProductsEndpoint + payload.id, payload);
        return data;
    },
    addToSpecial: async (payload) => {
        const { data } = await httpService.put(specialProductsEndpoint + payload.id, payload);
        return data;
    },
    removeSaleProduct: async (id) => {
        const { data } = await httpService.delete(saleProductsEndpoint + id);
        return data;
    },
    removeSpecialProduct: async (id) => {
        const { data } = await httpService.delete(specialProductsEndpoint + id);
        return data;
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