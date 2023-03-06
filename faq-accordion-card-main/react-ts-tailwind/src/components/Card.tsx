import AccordionContainer from "./AccordionContainer";
import ImagePanel from "./ImagePanel";
import accordions from "../shared/accordions";

function Card() {
    return (
        <article className="flex h-full shadow-2xl">
            <ImagePanel />
            <AccordionContainer title="FAQ" accordions={accordions} />
        </article>
    );
}

export default Card;
