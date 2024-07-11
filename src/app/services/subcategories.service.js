import httpService from "./http.service";

const subcategoriesEndpoint = "subcategory/"

const subcategoriesService = {
    get: async () => {
        const { data } = await httpService.get(subcategoriesEndpoint);
        return data.content;
    }
}

export default subcategoriesService;
