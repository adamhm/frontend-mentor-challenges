type NavigationBarProps = {
    colorClass: string;
    hoverColorClass: `hover:${string}`;
    onGoBackClick?: React.MouseEventHandler<HTMLButtonElement>;
    onNextClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function NavigationBar({
    colorClass,
    hoverColorClass,
    onGoBackClick,
    onNextClick,
}: NavigationBarProps) {
    return (
        <div className="mb-[16px] mt-auto flex justify-between">
            <button
                type="button"
                className="h-[48px] w-[124px] rounded-md bg-white font-medium text-cool-gray hover:text-marine-blue"
                onClick={onGoBackClick}
            >
                Go Back
            </button>
            <button
                type="button"
                className={`h-[48px] w-[124px] rounded-md ${colorClass} text-white ${hoverColorClass}`}
                onClick={onNextClick}
            >
                Next Step
            </button>
        </div>
    );
}

export default NavigationBar;
