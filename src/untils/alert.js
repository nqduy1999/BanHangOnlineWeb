import Swal from "sweetalert2";

export const alertNotify = (title, content, icon) => {
    return Swal.fire({
        title: title,
        text: content,
        icon: icon
      });
}
export const alertYesNo = (title, content, icon, nameButton) => {
  return Swal.fire({
    title: title,
    text: content,
    icon: icon,
    showCancelButton: true,
    confirmButtonText: nameButton
  })
}
