import { quantityFactory } from "./quantityUtils";

describe("UnitInput", () => {
  it("example", () => {
    const { converter } = quantityFactory({ m: 3, f: 1 });
    expect(converter(2, "f")).toEqual({m: 6, f: 2});
  });
});
