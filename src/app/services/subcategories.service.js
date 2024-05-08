import { getSubcategories } from "../../API/FakeAPI";


const subcategoriesService = {
    get: async () => {
        const data = await getSubcategories();
        return data;
    }
}

export default subcategoriesService;
