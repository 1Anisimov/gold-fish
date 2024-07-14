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
        const {data}  = await httpService.get(userEndpoint);
        const user = await data.content.find((u) => u.id === localStorageService.getUserId());
        return user;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(userEndpoint + localStorageService.getUserId(), payload);
        return data;
    }
};

export default usersService;