type PlanCardProps = {
    image: string;
    note?: string;
    title: string;
    subtitle: string;
};

function PlanCard({ image, note, title, subtitle }: PlanCardProps) {
    const height = note ? "h-[183px]" : "h-[160px]";

    return (
        <section
            className={`flex ${height} w-[8.5rem] shrink-0 grow flex-col rounded-md border border-gray-300 px-[16px] pb-[14px] pt-[20px]`}
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
