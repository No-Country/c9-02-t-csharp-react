import axios from "axios";

const MoonApi = axios.create({
    baseURL:"http://www.moonbank.somee.com/api"
})

export default MoonApi