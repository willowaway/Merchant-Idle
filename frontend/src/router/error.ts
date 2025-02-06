
import router from "@/router/router";
import { useTemplateStore } from "@/stores/template";
import type { FirebaseError } from "firebase/app";

const onPageFirebaseError = function(error: FirebaseError)
{
	if (error.code && error.message) {
		
		const template = useTemplateStore();

		template.errorCode = error.code;
		template.errorMessage = error.message;

		switch (error.code) {
			case "400":
				router.push({name: "error-400"});
				break;
			case "401":
				router.push({name: "error-401"});
				break;
			case "403":
				router.push({name: "error-403"});
				break;
			case "404":
				router.push({name: "error-404"});
				break;
			case "500":
				router.push({name: "error-500"});
				break;
			case "503":
				router.push({name: "error-503"});
				break;
			default:
				router.push({name: "error"});
				break;
		}
	} else {
		console.error(`onPageError no error.code or error.message: ${error}`);
	}
}

export default onPageFirebaseError;