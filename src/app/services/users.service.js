import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const userEndpoint = "users/";

const usersService = {
    get: async () => {
        const req = await httpService.get(userEndpoint);
        return req.data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(userEndpoint + payload.id, payload);
        return data;
    },
    getCurrentUser: async () => {
        const data = await httpService.get(userEndpoint + localStorageService.getUserId());
        const result = JSON.parse(data.request.response)
        return result;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(userEndpoint + localStorageService.getUserId(), payload);
        return data;
    },
    addProductToBasket: async (products) => {
        const data = await httpService.patch(userEndpoint + localStorageService.getUserId(), {basket: products});
        return data;
    }
    
};

export default usersService;