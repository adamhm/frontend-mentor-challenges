type PlanCardProps = {
    image: string;
    note?: string;
    title: string;
    subtitle: string;
    active: boolean;
};

function PlanCard({ image, note, title, subtitle, active }: PlanCardProps) {
    const height = note ? "h-[183px]" : "h-[160px]";

    const sectionVariants = {
        active: "bg-ghost-white border-purple-navy",
        inactive:
            "bg-white border-gray-300 hover:bg-ghost-white hover:border-purple-navy",
    };

    return (
        <section
            className={`flex ${height} w-[8.5rem] shrink-0 grow cursor-pointer flex-col rounded-md border px-[16px] pb-[14px] pt-[20px] ${
                sectionVariants[active ? "active" : "inactive"]
            }`}
        >
            <img src={image} alt="" className="w-[42px]" />
            <p className="mt-auto text-[18px] font-bold text-marine-blue">
                {title}
            </p>
            <p className="text-[15px] text-cool-gray">{subtitle}</p>
            {note && (
                <p className="text-[14px] font-normal text-marine-blue">
                    {note}
                </p>
            )}
        </section>
    );
}

export default PlanCard;
