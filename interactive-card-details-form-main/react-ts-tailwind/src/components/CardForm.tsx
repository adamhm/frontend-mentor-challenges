import CompletedPanel from "./CompletedPanel";

function CardForm() {
    return (
        <section>
            <form id="card_form" action="">
                <label>Cardholder Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    data-target="name"
                    placeholder="e.g. Jane Appleseed"
                />
                <span id="error_name">Error</span>
                <label htmlFor="number">Card Number</label>
                <input
                    type="text"
                    id="number"
                    name="number"
                    data-target="number"
                    maxLength={19}
                    placeholder="e.g. 1234 5678 9123 0000"
                />
                <span id="error_number">Error</span>
                <div>
                    <div>
                        <label htmlFor="month">Exp. Date (MM/YY)</label>
                        <div>
                            <input
                                type="text"
                                id="month"
                                name="month"
                                maxLength={2}
                                placeholder="MM"
                                data-target="expiration"
                                aria-label="expiration month"
                            />
                            <input
                                type="text"
                                id="year"
                                name="year"
                                maxLength={2}
                                placeholder="YY"
                                data-target="expiration"
                                aria-label="expiration year"
                            />
                        </div>
                        <span id="error_expiration">Error</span>
                    </div>
                    <div>
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            data-target="cvc"
                            maxLength={3}
                            placeholder="e.g. 123"
                        />
                        <span id="error_cvc">Error</span>
                    </div>
                </div>
                <button id="confirm" type="button">
                    Confirm
                </button>
            </form>
            <CompletedPanel />
        </section>
    );
}

export default CardForm;
