type NavigationBarProps = {
    colorClass: string;
    hoverColorClass: string;
};

function NavigationBar({ colorClass, hoverColorClass }: NavigationBarProps) {
    return (
        <div className="mb-[16px] mt-auto flex justify-between">
            <button
                type="button"
                className="h-[48px] w-[124px] rounded-md bg-white font-medium text-cool-gray hover:text-marine-blue"
            >
                Go Back
            </button>
            <button
                type="button"
                className={`h-[48px] w-[124px] rounded-md ${colorClass} text-white hover:${hoverColorClass}`}
            >
                Next Step
            </button>
        </div>
    );
}

export default NavigationBar;
