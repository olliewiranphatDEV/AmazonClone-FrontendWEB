import Swal from "sweetalert2";

export const renderAlert = (msg, icon) => {
    return Swal.fire({
        text: msg,
        icon: icon,
        confirmButtonText: "OK",
        showCancelButton: icon === "error", //WORK!, WHEN icon === "error" -- renderAlert("Something went wrong", "error")
        cancelButtonText: "Cancel",
        customClass: {
            popup: "rounded-2xl shadow-lg",
            confirmButton: 'bg-[#131921] text-white px-4 py-2 rounded hover:bg-[#febd69] hover:text-black  hover:duration-300 outline-none mr-4',
            cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 hover:duration-300 outline-none'
        },
        buttonsStyling: false
    });
}
