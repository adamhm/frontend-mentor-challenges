import { ReactComponent as AlertIcon } from "@assets/alert-circle-outline.svg";

type ErrorMessageProps = {
    message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="mt-12 text-center">
            <AlertIcon className="mx-auto h-12 w-12" />
            <p className="text-md mt-2 font-semibold md:text-xl">{message}</p>
        </div>
    );
}

export default ErrorMessage;
