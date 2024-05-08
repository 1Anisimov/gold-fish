import { getAllProducts } from "../../API/FakeAPI";
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
    }
}

export default productsService;