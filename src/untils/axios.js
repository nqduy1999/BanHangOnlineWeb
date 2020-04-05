import Axios from "axios";
export default Axios.create({
    baseURL: "https://vanphongphamonline.herokuapp.com/api/v1/"
})