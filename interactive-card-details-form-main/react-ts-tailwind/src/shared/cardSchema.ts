import * as yup from "yup";

import { ErrorMessage } from "./ErrorMessage";

const cardSchema = yup.object({
    name: yup.string().required(ErrorMessage.CantBeBlank),
    number: yup
        .string()
        .required(ErrorMessage.CantBeBlank)
        .length(19, ErrorMessage.WrongFormat)
        .matches(
            /\d{4}\s\d{4}\s\d{4}\s\d{4}/,
            ErrorMessage.WrongFormatNumbersOnly
        ),
    month: yup
        .string()
        .required(ErrorMessage.CantBeBlank)
        .length(2, ErrorMessage.WrongFormat)
        .matches(/(0[1-9])|(1[0-2])/, ErrorMessage.WrongFormatNumbersOnly),
    year: yup
        .string()
        .required(ErrorMessage.CantBeBlank)
        .length(2, ErrorMessage.WrongFormat)
        .matches(/\d{2}/, ErrorMessage.WrongFormatNumbersOnly),
    cvc: yup
        .string()
        .required(ErrorMessage.CantBeBlank)
        .length(3, ErrorMessage.WrongFormat)
        .matches(/\d{3}/, ErrorMessage.WrongFormatNumbersOnly),
});

export default cardSchema;
