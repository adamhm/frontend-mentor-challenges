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
        <div className="mb-[16px] mt-auto flex justify-between">
            <button
                type="button"
                className="h-[48px] w-[124px] rounded-md bg-white font-medium text-cool-gray hover:text-marine-blue"
                onClick={onSecondaryClick}
            >
                {secondaryText}
            </button>
            <button
                type="button"
                className={`h-[48px] w-[124px] rounded-md ${colorClass} text-white ${hoverColorClass}`}
                onClick={onPrimaryClick}
            >
                {primaryText}
            </button>
        </div>
    );
}

export default NavigationBar;
