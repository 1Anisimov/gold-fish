import { getAllPromocodes } from "../../API/FakeAPI";

const promocodesService = {
    get: async () => {
        const data = await getAllPromocodes();
        return data;
    }
}

export default promocodesService;