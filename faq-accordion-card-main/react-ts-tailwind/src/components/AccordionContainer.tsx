import AccordionItem from "./AccordionItem"
import { Accordion } from "../shared/accordion"
import { useState } from "react"

type Props = {
    title: string
    accordions: Accordion[]
}

function AccordionContainer({ title, accordions }: Props) {
    const [expandedItemId, setExpandedItemId] = useState(2)

    return (
        <div>
            <h1 className="mb-5 text-[2rem] font-bold">{title}</h1>
            {accordions.map((item) => (
                <AccordionItem
                    id={item.id}
                    headerText={item.headerText}
                    sectionText={item.sectionText}
                    expanded={item.id === expandedItemId}
                    itemClicked={(id) => setExpandedItemId(id)}
                />
            ))}
        </div>
    )
}

export default AccordionContainer
