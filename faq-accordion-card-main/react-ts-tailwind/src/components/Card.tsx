import AccordionContainer from "./AccordionContainer";
import ImagePanel from "./ImagePanel";
import accordions from "../shared/accordions";

function Card() {
    return (
        <article className="flex h-full flex-col shadow-2xl md:flex-row">
            <ImagePanel />
            <AccordionContainer title="FAQ" accordions={accordions} />
        </article>
    );
}

export default Card;
