import { MouseEventHandler } from "react";

type NavigationBarProps = {
    colorClass: string;
    hoverColorClass: `hover:${string}`;
    primaryText?: string;
    secondaryText?: string;
    onSecondaryClick?: MouseEventHandler<HTMLButtonElement>;
    onPrimaryClick: MouseEventHandler<HTMLButtonElement>;
};

function NavigationBar({
    colorClass,
    hoverColorClass,
    primaryText = "Next Step",
    secondaryText = "Go Back",
    onSecondaryClick,
    onPrimaryClick,
}: NavigationBarProps) {
    const justify = onSecondaryClick ? "justify-between" : "justify-end";

    return (
        <div
            className={`mt-auto flex h-[4.5rem] w-full ${justify} items-center bg-white px-[16px] md:h-[5rem] md:px-0`}
        >
            {onSecondaryClick && (
                <button
                    type="button"
                    className="h-[40px] rounded-md bg-white font-medium text-cool-gray hover:text-marine-blue md:h-[48px]"
                    onClick={onSecondaryClick}
                >
                    {secondaryText}
                </button>
            )}
            <button
                type="button"
                className={`h-[40px] w-[96px] rounded-md md:h-[48px] md:w-[124px] ${colorClass} text-white ${hoverColorClass}`}
                onClick={onPrimaryClick}
            >
                {primaryText}
            </button>
        </div>
    );
}

export default NavigationBar;
