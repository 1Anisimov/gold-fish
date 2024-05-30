import { getAllProducts, getNotSaleProducts, getProductByIdApi, getSaleProducts } from "../../API/FakeAPI";
import httpService from "./http.service";


const productsEndpoint = "products/";

const productsService = {
    create: async (payload) => {
        const { data } = await httpService.put(productsEndpoint + payload._id, payload);
        return data;
    },
    get: async () => {
        const data = await getAllProducts();
        return data;
    },
    getAllSaleProducts: async () => {
        const data = await getSaleProducts();
        return data;
    },
    getAllSpecialProducts: async () => {
        const data = await getNotSaleProducts();
        return data;
    },
    getProductById: async (productId) => {
        const data = await getProductByIdApi(productId);
        return data;
    }
}

export default productsService;