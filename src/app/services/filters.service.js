import { getAllProducts } from "../../API/FakeAPI";


const filtersService = {
    getProducts: async () => {
        const data = await getAllProducts();
        return data;
    }
}

export default filtersService;