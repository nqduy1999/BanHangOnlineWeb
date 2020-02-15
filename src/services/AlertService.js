import Swal from "sweetalert2";

export default class AlertService {
    alertSucess = async (title, text, icon) => {
        const {value: accept} = await Swal.fire({
            title: title,
            text: text,
            icon: icon
          })
          return accept;
    }
}