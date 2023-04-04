import { FormEvent, useState } from "react";
import {
    Form,
    FormikHelpers,
    Field,
    useFormik,
    FormikProvider,
    ErrorMessage,
} from "formik";

import CompletedPanel from "./CompletedPanel";
import { BankCard } from "../shared/BankCard";
import cardSchema from "../shared/cardSchema";
import formatCardNumber from "../shared/formatCardNumber";

type Props = {
    onDataChange?: (data: FormEvent) => void;
};

function CardForm({ onDataChange }: Props) {
    const [completed, setCompleted] = useState<boolean>(false);

    const initialValues: BankCard = {
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: "",
    };

    const handleSubmit = (
        values: BankCard,
        actions: FormikHelpers<BankCard>
    ) => {
        setCompleted(true);
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: cardSchema,
    });

    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;

        if (target.name === "number") {
            const start = target.selectionStart || 0;
            formik.setFieldValue("number", formatCardNumber(target.value));
            target.setSelectionRange(start + 1, start + 1);
        }

        onDataChange?.(event);
    };

    const expirationError =
        formik.touched.month && formik.errors.month ? (
            <ErrorMessage
                name="month"
                component="span"
                className="mt-[0.1rem] block text-error md:mt-[0.6rem]"
            />
        ) : formik.touched.year && formik.errors.year ? (
            <ErrorMessage
                name="year"
                component="span"
                className="mt-[0.1rem] block text-error md:mt-[0.6rem]"
            />
        ) : null;

    return (
        <section className="flex shrink-0 grow basis-0 px-6 text-[12px] leading-[normal] md:pl-[224px] md:pr-0">
            {!completed && (
                <FormikProvider value={formik}>
                    <Form
                        id="card_form"
                        className="mt-[90px] w-[381px] md:mt-[275px]"
                        onChange={handleChange}
                    >
                        <label className="mb-2 mt-0 font-bold uppercase tracking-[2px] text-label">
                            Cardholder Name
                        </label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            aria-invalid={formik.errors.name}
                            placeholder="e.g. Jane Appleseed"
                            className="placeholder peer h-[45px] w-full rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                        />
                        <ErrorMessage
                            name="name"
                            component="span"
                            className="mt-[0.1rem] block text-error md:mt-[0.6rem]"
                        />
                        <label
                            className="mb-2 mt-[1.65rem] font-bold uppercase tracking-[2px] text-label"
                            htmlFor="number"
                        >
                            Card Number
                        </label>
                        <Field
                            type="text"
                            id="number"
                            name="number"
                            aria-invalid={formik.errors.number}
                            maxLength={19}
                            placeholder="e.g. 1234 5678 9123 0000"
                            className="placeholder peer h-[45px] w-full rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                        />
                        <ErrorMessage
                            name="number"
                            component="span"
                            className="mt-[0.1rem] block text-error md:mt-[0.6rem]"
                        />
                        <div className="flex gap-x-[20px]">
                            <div>
                                <label
                                    className="mb-2 mt-[1.65rem] font-bold uppercase tracking-[2px] text-label"
                                    htmlFor="month"
                                >
                                    Exp. Date (MM/YY)
                                </label>
                                <div className="flex gap-x-[10px]">
                                    <Field
                                        type="text"
                                        id="month"
                                        name="month"
                                        maxLength={2}
                                        placeholder="MM"
                                        aria-invalid={formik.errors.month}
                                        aria-label="expiration month"
                                        className="placeholder inline-block h-[45px] w-[80px] rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                                    />
                                    <Field
                                        type="text"
                                        id="year"
                                        name="year"
                                        maxLength={2}
                                        placeholder="YY"
                                        aria-invalid={formik.errors.year}
                                        aria-label="expiration year"
                                        className="placeholder inline-block h-[45px] w-[80px] rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                                    />
                                </div>
                                {expirationError}
                            </div>
                            <div>
                                <label
                                    className="mb-2 mt-[1.65rem] font-bold uppercase tracking-[2px] text-label"
                                    htmlFor="cvc"
                                >
                                    CVC
                                </label>
                                <Field
                                    type="text"
                                    id="cvc"
                                    name="cvc"
                                    aria-invalid={formik.errors.cvc}
                                    maxLength={3}
                                    placeholder="e.g. 123"
                                    className="placeholder peer h-[45px] w-full rounded-[8px] border border-solid border-input-border px-4 py-0 text-[18px] leading-[normal] placeholder:text-input-placeholder focus-visible:outline-input-focus aria-[invalid]:border-error"
                                />
                                <ErrorMessage
                                    name="cvc"
                                    component="span"
                                    className="mt-[0.1rem] block text-error md:mt-[0.6rem]"
                                />
                            </div>
                        </div>
                        <button
                            id="confirm"
                            type="submit"
                            className="mt-5 h-[53px] w-full rounded-[8px] bg-button text-[1rem] leading-[normal] text-button-text md:mt-10 md:text-[18px]"
                        >
                            Confirm
                        </button>
                    </Form>
                </FormikProvider>
            )}
            {completed && <CompletedPanel />}
        </section>
    );
}

export default CardForm;
