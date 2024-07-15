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
        const {data}  = await httpService.get(productsEndpoint)
        return data.content;
    },
    removeProduct: async (id) => {
        const { data } = await httpService.delete(productsEndpoint + id);
        return data;
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
        return data.content;
    },
    getProductById: async (productId) => {
        const { data } = await httpService.get(productsEndpoint);
        return data.find((p) => p.id === productId)
        // return data;
    }
}

export default productsService;