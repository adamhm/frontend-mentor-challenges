import { FormEvent, useState } from "react";

import ImagePanel from "./ImagePanel";
import CardForm from "./CardForm";
import { BankCard } from "../shared/BankCard";

const defaultCard: BankCard = {
    name: "Jane Appleseed",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
};

function Card() {
    const [bankCard, setBankCard] = useState<BankCard>(defaultCard);

    const handleDataChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;

        setBankCard({ ...bankCard, [target.name]: target.value });
    };

    return (
        <article className="flex h-full flex-col justify-center bg-card md:flex-row">
            <ImagePanel bankCard={bankCard} />
            <CardForm onDataChange={handleDataChange} />
        </article>
    );
}

export default Card;
