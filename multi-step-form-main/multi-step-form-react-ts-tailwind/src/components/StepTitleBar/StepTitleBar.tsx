type StepTitleBarProps = {
    title: string;
    subtitle: string;
};

function StepTitleBar({ title, subtitle }: StepTitleBarProps) {
    return (
        <header className="md:mt-8">
            <h1 className="text-[24px] font-bold text-marine-blue md:text-[32px]">
                {title}
            </h1>
            <h2 className="mt-1 text-cool-gray">{subtitle}</h2>
        </header>
    );
}

export default StepTitleBar;
