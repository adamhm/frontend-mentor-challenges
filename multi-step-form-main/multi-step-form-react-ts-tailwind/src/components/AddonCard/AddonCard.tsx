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
            className={`mb-4 flex h-[5em] w-full items-center rounded-md border text-left ${
                sectionVariants[active ? "active" : "inactive"]
            }`}
            onClick={() => onChange?.(!active)}
        >
            <span
                aria-hidden
                className={`mx-[24px] flex h-[22px] w-[22px] items-center rounded-md border border-gray-300 ${
                    buttonVariants[active ? "active" : "inactive"]
                }`}
            >
                {active && <img src={iconCheckMark} alt="" className="ml-1" />}
            </span>
            <div>
                <p className="text-[17px] font-medium text-marine-blue">
                    {title}
                </p>
                <p className="text-[15px] text-cool-gray">{subtitle}</p>
            </div>
            <p className="ml-auto mr-[24px] text-[15px] font-medium text-slate-blue">
                {text}
            </p>
        </button>
    );
}

export default AddonCard;
