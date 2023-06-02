type StepElementProps = {
    active: boolean;
    step: number;
    text: string;
};

function StepElement({ active, step, text }: StepElementProps) {
    const spanClassNames =
        "flex h-[34px] w-[34px] items-center justify-center rounded-full border text-center text-[14px] font-bold";

    return (
        <div className="flex gap-[15px]">
            <span
                className={`${spanClassNames}${
                    active ? " bg-light-blue text-black" : " text-white"
                }`}
            >
                {step}
            </span>
            <div className="uppercase">
                <p className="text-[13px] text-pastel-blue">step {step}</p>
                <p className="mt-[-2px] text-[14px] font-bold tracking-widest text-white">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default StepElement;
