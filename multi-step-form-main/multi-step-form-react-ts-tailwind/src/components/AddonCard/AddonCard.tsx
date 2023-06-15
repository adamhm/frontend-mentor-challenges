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
        <section
            className={`mb-4 flex h-[5em] items-center rounded-md border ${
                sectionVariants[active ? "active" : "inactive"]
            }`}
        >
            <button
                type="button"
                aria-pressed={active}
                className={`mx-[24px] h-[22px] w-[22px] rounded-md border border-gray-300 text-center ${
                    buttonVariants[active ? "active" : "inactive"]
                }`}
                onClick={() => onChange?.(!active)}
            >
                <span className="sr-only">{title}</span>
                {active && <img src={iconCheckMark} alt="" className="ml-1" />}
            </button>
            <div>
                <p className="text-[17px] font-medium text-marine-blue">
                    {title}
                </p>
                <p className="text-[15px] text-cool-gray">{subtitle}</p>
            </div>
            <p className="ml-auto mr-[24px] text-[15px] font-medium text-slate-blue">
                {text}
            </p>
        </section>
    );
}

export default AddonCard;
