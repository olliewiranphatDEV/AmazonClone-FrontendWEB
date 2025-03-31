import Swal from "sweetalert2";

export const renderAlert = (msg, icon) => {
    return Swal.fire({
        text: msg,
        icon: icon
    });
}
