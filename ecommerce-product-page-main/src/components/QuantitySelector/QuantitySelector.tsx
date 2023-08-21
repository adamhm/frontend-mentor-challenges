import { ReactComponent as MinusIcon } from "@assets/icon-minus.svg";
import { ReactComponent as PlusIcon } from "@assets/icon-plus.svg";

type QuantitySelectorProps = {
    value: number;
    onPlusClick?: () => void;
    onMinusClick?: () => void;
};

function QuantitySelector({
    value,
    onMinusClick,
    onPlusClick,
}: QuantitySelectorProps) {
    return (
        <section className="flex h-[54px] w-[156px] items-center justify-between rounded-lg bg-light-grayish-blue px-4">
            <button
                type="button"
                onClick={onMinusClick}
                className="hover:opacity-60"
            >
                <MinusIcon />
            </button>
            <span className="text-[15px] font-bold">{value}</span>
            <button
                type="button"
                onClick={onPlusClick}
                className="hover:opacity-60"
            >
                <PlusIcon />
            </button>
        </section>
    );
}

export default QuantitySelector;
