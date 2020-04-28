import Axios from "axios";
export default Axios.create({
    baseURL: "https://api-vpponline.herokuapp.com/api/v1/"
})