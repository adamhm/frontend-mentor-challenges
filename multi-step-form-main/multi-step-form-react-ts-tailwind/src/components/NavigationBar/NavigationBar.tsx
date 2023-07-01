import { MouseEventHandler } from "react";

type NavigationBarProps = {
    colorClass: string;
    hoverColorClass: `hover:${string}`;
    primaryText?: string;
    secondaryText?: string;
    onSecondaryClick?: MouseEventHandler<HTMLButtonElement>;
    onPrimaryClick?: MouseEventHandler<HTMLButtonElement>;
};

function NavigationBar({
    colorClass,
    hoverColorClass,
    primaryText = "Next Step",
    secondaryText = "Go Back",
    onSecondaryClick,
    onPrimaryClick,
}: NavigationBarProps) {
    return (
        <div className="flex w-full justify-between">
            <button
                type="button"
                className="h-[40px] rounded-md bg-white font-medium text-cool-gray hover:text-marine-blue md:h-[48px]"
                onClick={onSecondaryClick}
            >
                {secondaryText}
            </button>
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
