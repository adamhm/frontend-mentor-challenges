import iconCheckMark from "@assets/images/icon-checkmark.svg";

type AddonCardProps = {
    title: string;
    subtitle: string;
    text: string;
    active: boolean;
    onChange?: (active: boolean) => void;
};

function AddonCard({
    title,
    subtitle,
    text,
    active,
    onChange,
}: AddonCardProps) {
    const sectionVariants = {
        active: "bg-ghost-white border-purple-navy",
        inactive:
            "bg-white border-gray-300 hover:bg-ghost-white hover:border-purple-navy",
    };

    const buttonVariants = {
        active: "bg-purplish-blue",
        inactive: "bg-transparent",
    };

    return (
        <button
            type="button"
            aria-pressed={active}
            className={`mb-4 flex h-[4em] w-full items-center rounded-md border text-left last-of-type:mb-6 md:h-[5em] ${
                sectionVariants[active ? "active" : "inactive"]
            }`}
            onClick={() => onChange?.(!active)}
        >
            <span
                aria-hidden
                className={`mx-[1rem] flex h-[22px] w-[22px] items-center rounded-md border border-gray-300 md:mx-[24px] ${
                    buttonVariants[active ? "active" : "inactive"]
                }`}
            >
                {active && <img src={iconCheckMark} alt="" className="ml-1" />}
            </span>
            <div>
                <p className="md: text-[14px] font-bold tracking-tighter text-marine-blue md:text-[17px] md:tracking-normal">
                    {title}
                </p>
                <p className="text-[13px] tracking-tighter text-cool-gray md:text-[15px] md:tracking-normal">
                    {subtitle}
                </p>
            </div>
            <p className="ml-auto mr-[1rem] text-[13px] font-medium text-slate-blue md:mr-[24px] md:text-[15px]">
                {text}
            </p>
        </button>
    );
}

export default AddonCard;
