import { TWS } from "tailwind-fun";

type ToggleButtonProps = {
    state: "monthly" | "yearly";
    onChange?: (state: "monthly" | "yearly") => void;
};

function ToggleButton({ state, onChange }: ToggleButtonProps) {
    const spanStyle = TWS("mr-6 font-medium").addIfElse(
        state === "monthly",
        "text-cool-gray",
        "text-marine-blue"
    );

    const spanStyleRight = TWS("ml-6 font-medium").addIfElse(
        state === "monthly",
        "text-marine-blue",
        "text-cool-gray"
    );

    const buttonStyle = TWS(
        "inline-flex h-[20px] w-[36px] items-center rounded-full bg-marine-blue p-1"
    ).addWhen(state === "yearly", "justify-end");

    return (
        <div>
            <span className={spanStyle.className}>Monthly</span>
            <button
                type="button"
                aria-pressed={state === "yearly"}
                className={buttonStyle.className}
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
            <span className={spanStyleRight.className}>Yearly</span>
        </div>
    );
}

export default ToggleButton;
