import * as yup from "yup";

import cardSchema from "./cardSchema";

export type BankCard = yup.InferType<typeof cardSchema>;
