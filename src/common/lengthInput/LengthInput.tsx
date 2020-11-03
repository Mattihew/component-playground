import { quantityFactory } from "../unitInput/quantityUtils";

const lengths = {
  nmi: 1,
  km: 1.852,
  ft: 6076.12,
  m: 1852,
};

const lengthModule = quantityFactory(lengths);

export const LengthInput = lengthModule.Input;
