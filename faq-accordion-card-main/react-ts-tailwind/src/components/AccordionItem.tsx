type Props = {
    id: number
    headerText: string
    sectionText: string
    expanded: boolean
    itemClicked: (id: number) => void
}

function AccordionItem({
    id,
    headerText,
    sectionText,
    expanded,
    itemClicked,
}: Props) {
    return (
        <div className="border-b border-solid border-b-divider text-[14px]">
            <h2>
                <button
                    className="after:bg-arr flex w-full cursor-pointer items-center border-none bg-transparent px-0 py-[1.1rem] font-normal after:ml-auto after:mr-[0.9rem] after:h-[7px] after:w-[10px] after:bg-white after:bg-arrow after:bg-cover after:bg-center after:bg-no-repeat after:content-[''] aria-expanded:font-bold aria-expanded:after:rotate-180 aria-[expanded=false]:hover:text-hover"
                    id={`question${id}`}
                    aria-controls={`answer${id}`}
                    aria-expanded={expanded}
                    onClick={() => itemClicked(id)}
                >
                    {headerText}
                </button>
            </h2>
            <section
                className="mt-[-0.4rem] hidden pb-[1.1rem] pr-7 text-justify leading-[1.1rem] text-text2 data-[open=true]:block data-[open=true]:text-[12px]"
                id={`answer${id}`}
                aria-labelledby={`question${id}`}
                data-open={expanded}
            >
                <p>{sectionText}</p>
            </section>
        </div>
    )
}

export default AccordionItem
