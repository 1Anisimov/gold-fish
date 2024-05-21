import { getCurrentUserFakeApi } from "../../API/FakeAPI";

const currentUserService = {
    get: async () => {
        const data = await getCurrentUserFakeApi();
        return data;
    }
}

export default currentUserService;