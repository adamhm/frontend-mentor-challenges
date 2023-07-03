type StepContentProps = {
    children: React.ReactNode;
};

function StepContent({ children }: StepContentProps) {
    return (
        <div className="mx-4 mb-[24px] rounded-2xl border border-white bg-white px-[24px] pb-[1px] pt-[26px] shadow-xl md:mx-0 md:h-[376px] md:px-0 md:pt-0 md:shadow-none">
            {children}
        </div>
    );
}

export default StepContent;
