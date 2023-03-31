import ImagePanel from "./ImagePanel";
import CardForm from "./CardForm";

function Card() {
    return (
        <article className="flex h-full justify-center bg-card">
            <ImagePanel />
            <CardForm />
        </article>
    );
}

export default Card;
