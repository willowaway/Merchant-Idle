// Sweetalert2, for more info and examples, you can check out https://github.com/sweetalert2/sweetalert2
import Swal from "sweetalert2";

// Set default properties
const swal = Swal.mixin({
	buttonsStyling: false,
	target: "#page-container",
	customClass: {
		confirmButton: "btn btn-success m-1",
		cancelButton: "btn btn-danger m-1",
		input: "form-control",
	},
});

function message(msg: string) {
	swal.fire(msg);
}

function success(msg: string) {
	swal.fire("Success", msg, "success");
}

function info(msg: string) {
	swal.fire("Info", msg, "info");
}

function warn(warning: string) {
	swal.fire("Warning", warning, "warning");
}

function error(error: string) {
	swal.fire("Oops... something went wrong", error, "error");
}

function question() {
	swal.fire("Question", "Are you sure about that?", "question");
}

function confirm() {
	swal
		.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		})
		.then((result) => {
			if (result.isConfirmed) {
				swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				});
			}
		});
}

export const toast = {
	message,
	success,
	info,
	warn,
	error,
	question,
	confirm,
};
