type ToggleButtonProps = {
    state: "monthly" | "yearly";
    onChange?: (state: "monthly" | "yearly") => void;
};

function ToggleButton({ state, onChange }: ToggleButtonProps) {
    const leftColor =
        state === "monthly" ? "text-marine-blue" : "text-cool-gray";
    const rightColor =
        state === "yearly" ? "text-marine-blue" : "text-cool-gray";

    return (
        <div>
            <span className={`mr-6 font-medium ${leftColor}`}>Monthly</span>
            <button
                type="button"
                aria-pressed={state === "yearly"}
                className={`inline-flex h-[20px] w-[36px] items-center ${
                    state === "yearly" && "justify-end"
                } rounded-full bg-marine-blue p-1`}
                onClick={() =>
                    onChange?.(state === "monthly" ? "yearly" : "monthly")
                }
            >
                <span className="sr-only">Yearly plan</span>
                <span
                    aria-hidden="true"
                    className="h-[12px] w-[12px] rounded-full bg-white"
                />
            </button>
            <span className={`ml-6 font-medium ${rightColor}`}>Yearly</span>
        </div>
    );
}

export default ToggleButton;
