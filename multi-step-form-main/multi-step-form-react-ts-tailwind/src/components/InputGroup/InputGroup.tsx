/* eslint-disable react/jsx-props-no-spreading */

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error: string | null;
    id: string;
    label: string;
};

function InputGroup(props: InputProps) {
    const { id, error, label } = props;

    return (
        <>
            <div className="mt-[8px] flex text-[14px] font-medium md:mt-5 md:text-[1rem]">
                <label htmlFor={id} className="text-marine-blue">
                    {label}
                </label>
                {error && <span className="ml-auto text-red-600">{error}</span>}
            </div>
            <input
                {...props}
                aria-invalid={!!error}
                className={`mt-1 block h-[40px] w-full rounded-lg border p-4 placeholder:font-medium md:h-[3rem] ${
                    error ? "border-red-600" : "border-gray-300"
                }`}
            />
        </>
    );
}

export default InputGroup;
