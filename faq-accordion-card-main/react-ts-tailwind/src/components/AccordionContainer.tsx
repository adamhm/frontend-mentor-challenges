import AccordionItem from "./AccordionItem";
import { Accordion } from "../shared/accordion";
import { useState } from "react";

type Props = {
    title: string;
    accordions: Accordion[];
};

function AccordionContainer({ title, accordions }: Props) {
    const [expandedItemId, setExpandedItemId] = useState(2);

    return (
        <div className="basis-1/2 px-6 pt-3 pb-0 md:pt-[4rem] md:pr-[6rem] md:pb-0 md:pl-[1.25rem]">
            <h1 className="mb-[0.85rem] text-center text-[2rem] font-bold leading-[normal] md:mb-5 md:text-left">
                {title}
            </h1>
            {accordions.map((item) => (
                <AccordionItem
                    id={item.id}
                    key={item.id}
                    headerText={item.headerText}
                    sectionText={item.sectionText}
                    expanded={item.id === expandedItemId}
                    itemClicked={(id) => setExpandedItemId(id)}
                />
            ))}
        </div>
    );
}

export default AccordionContainer;
