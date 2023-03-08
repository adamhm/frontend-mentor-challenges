type Props = {
    id: number;
    headerText: string;
    sectionText: string;
    expanded: boolean;
    itemClicked: (id: number) => void;
};

function AccordionItem({
    id,
    headerText,
    sectionText,
    expanded,
    itemClicked,
}: Props) {
    return (
        <div className="border-b border-solid border-b-divider text-[14px] focus-within:outline focus-within:outline-2 focus-within:outline-black">
            <h2>
                <button
                    className="flex w-full cursor-pointer items-center border-none bg-transparent px-0 py-[1.1rem] text-[13.333px] font-normal leading-[normal] outline-none after:ml-auto after:mr-[0.9rem] after:h-[7px] after:w-[10px] after:bg-white after:bg-arrow after:bg-cover after:bg-center after:bg-no-repeat after:content-[''] aria-expanded:font-bold aria-expanded:after:rotate-180 aria-[expanded=false]:hover:text-hover"
                    id={`question${id}`}
                    aria-controls={`answer${id}`}
                    aria-expanded={expanded}
                    onClick={() => itemClicked(id)}
                >
                    {headerText}
                </button>
            </h2>
            <section
                className="mt-[-0.5rem] hidden pb-4 pr-7 text-justify leading-[1.1rem] text-text2 data-open:block data-open:pb-4 data-open:text-[12px]"
                id={`answer${id}`}
                aria-labelledby={`question${id}`}
                data-open={expanded}
            >
                <p>{sectionText}</p>
            </section>
        </div>
    );
}

export default AccordionItem;
