import Swal from "sweetalert2";
export const useAlertService = (title, text, icon, checkAction) => {
    if(checkAction) {
        const {value: accept} = Swal.fire({
            title: title,
            text: text,
            icon: icon
        })
        return accept;
    }
}
