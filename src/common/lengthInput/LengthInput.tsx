import { quantityFactory } from "../unitInput/quantityUtils";

const lengths = {
  ft: 1,
  m: 2,
};

const lengthModule = quantityFactory(lengths);

export const LengthInput = lengthModule.Input;
