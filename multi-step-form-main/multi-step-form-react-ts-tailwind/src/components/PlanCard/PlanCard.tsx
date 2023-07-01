type PlanCardProps = {
    image: string;
    note?: string;
    title: string;
    subtitle: string;
    active: boolean;
    onClick?: () => void;
};

function PlanCard({
    image,
    note,
    title,
    subtitle,
    active,
    onClick,
}: PlanCardProps) {
    const height = note ? "h-[100px] md:h-[183px]" : "h-[76px] md:h-[160px]";

    const sectionVariants = {
        active: "bg-ghost-white border-purple-navy",
        inactive:
            "bg-white border-gray-300 hover:bg-ghost-white hover:border-purple-navy",
    };

    return (
        <button
            type="button"
            aria-pressed={active}
            className={`flex ${height} w-full shrink-0 grow cursor-pointer flex-row rounded-md border px-[16px] md:w-[8.5rem] md:flex-col md:pb-[14px] md:pt-[20px] ${
                sectionVariants[active ? "active" : "inactive"]
            }`}
            onClick={onClick}
        >
            <img src={image} alt="" className="mt-[16px] w-[42px] md:mt-0" />
            <div className="ml-4 mt-4 flex flex-col items-start md:ml-0 md:mt-auto">
                <p className="text-[18px] font-bold text-marine-blue">
                    {title}
                </p>
                <p className="text-[15px] text-cool-gray">{subtitle}</p>
                {note && (
                    <p className="text-[14px] font-normal text-marine-blue">
                        {note}
                    </p>
                )}
            </div>
        </button>
    );
}

export default PlanCard;
