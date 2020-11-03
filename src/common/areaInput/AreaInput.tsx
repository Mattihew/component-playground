import { quantityFactory } from "../unitInput/quantityUtils";

const areas = {
  sqMi: 1,
  sqKm: 2.58999,
  sqFt: 27_880_000,
  sqM: 2_590_000,
};

const areaModule = quantityFactory(areas);

export const AreaInput = areaModule.Input;
