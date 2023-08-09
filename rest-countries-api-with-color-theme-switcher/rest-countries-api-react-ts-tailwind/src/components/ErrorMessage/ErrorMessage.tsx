import { ReactComponent as AlertIcon } from "@assets/alert-circle-outline.svg";

function ErrorMessage() {
    return (
        <div className="mt-12 text-center">
            <AlertIcon className="mx-auto h-12 w-12" />
            <p className="text-md mt-2 font-semibold md:text-xl">
                Oops! Something went wrong. Please, try again later.
            </p>
        </div>
    );
}

export default ErrorMessage;
