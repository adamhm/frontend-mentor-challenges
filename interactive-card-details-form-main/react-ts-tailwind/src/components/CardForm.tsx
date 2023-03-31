import CompletedPanel from "./CompletedPanel";

function CardForm() {
    return (
        <section className="flex shrink-0 grow basis-0 pl-[224px] text-[12px] leading-[normal]">
            <form id="card_form" action="" className="mt-[275px] w-[381px]">
                <label className="mb-2 mt-0 font-bold uppercase tracking-[2px] text-label">
                    Cardholder Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    data-target="name"
                    placeholder="e.g. Jane Appleseed"
                    className="placeholder peer h-[45px] w-full rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                />
                <span
                    id="error_name"
                    className="mt-[0.6rem] hidden text-error peer-aria-[invalid]:block"
                >
                    Error
                </span>
                <label
                    className="mb-2 mt-[1.65rem] font-bold uppercase tracking-[2px] text-label"
                    htmlFor="number"
                >
                    Card Number
                </label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    data-target="number"
                    maxLength={19}
                    placeholder="e.g. 1234 5678 9123 0000"
                    className="placeholder peer h-[45px] w-full rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                />
                <span
                    id="error_number"
                    className="mt-[0.6rem] hidden text-error peer-aria-[invalid]:block"
                >
                    Error
                </span>
                <div className="flex gap-x-[20px]">
                    <div>
                        <label
                            className="mb-2 mt-[1.65rem] font-bold uppercase tracking-[2px] text-label"
                            htmlFor="month"
                        >
                            Exp. Date (MM/YY)
                        </label>
                        <div className="flex gap-x-[10px]">
                            <input
                                type="text"
                                id="month"
                                name="month"
                                maxLength={2}
                                placeholder="MM"
                                data-target="expiration"
                                aria-label="expiration month"
                                className="placeholder inline-block h-[45px] w-[80px] rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                            />
                            <input
                                type="text"
                                id="year"
                                name="year"
                                maxLength={2}
                                placeholder="YY"
                                data-target="expiration"
                                aria-label="expiration year"
                                className="placeholder inline-block h-[45px] w-[80px] rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                            />
                        </div>
                        <span
                            id="error_expiration"
                            className="mt-[0.6rem] hidden text-error"
                        >
                            Error
                        </span>
                    </div>
                    <div>
                        <label
                            className="mb-2 mt-[1.65rem] font-bold uppercase tracking-[2px] text-label"
                            htmlFor="cvc"
                        >
                            CVC
                        </label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            data-target="cvc"
                            maxLength={3}
                            placeholder="e.g. 123"
                            className="placeholder peer h-[45px] w-full rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                        />
                        <span
                            id="error_cvc"
                            className="mt-[0.6rem] hidden text-error peer-aria-[invalid]:block"
                        >
                            Error
                        </span>
                    </div>
                </div>
                <button
                    id="confirm"
                    type="button"
                    className="mt-10 h-[53px] w-full rounded-[8px] bg-button text-[18px] leading-[normal] text-button-text"
                >
                    Confirm
                </button>
            </form>
            <CompletedPanel />
        </section>
    );
}

export default CardForm;
