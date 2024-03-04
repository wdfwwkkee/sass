import axios from "axios";

export const CarService = {
    async getAll() {
        const responce = await axios.get("https://my-json-server.typicode.com/wdfwwkkee/tortiki/cars");
        return responce.data;
    },
    async getAllById(id) {
        const responce = await axios.get(`https://my-json-server.typicode.com/wdfwwkkee/tortiki/cars?id=${id}`);
        return responce.data[0];
    },
    async create(data) {
        return axios.post('https://my-json-server.typicode.com/wdfwwkkee/tortiki/cars', data)
    }
}