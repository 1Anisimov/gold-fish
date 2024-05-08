import { getCategories } from "../../API/FakeAPI"


const categoriesService = {
    get: async () => {
        const data = await getCategories();
        return data;
    }
}

export default categoriesService;
