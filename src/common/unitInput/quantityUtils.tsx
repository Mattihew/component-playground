import React, { useState, MouseEvent } from "react";
import {
  Button,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from "@material-ui/core";

export const quantityFactory = <
  Q extends Record<string, number>,
  U extends string & keyof Q
>(
  base: Q
) => {
  if (Object.values(base).some((value) => value === 0)) {
    throw new Error("Quantity definition cannot contain zeros(0)");
  }

  const unitNames = Object.keys(base) as U[];

  const convert = (input: number, unitName: U): Q => {
    const multiplier = input / base[unitName];
    return Object.fromEntries(
      Object.entries(base).map(([key, value]) => [key, value * multiplier])
    ) as Q;
  };

  const isUnit = (name: string): name is U => {
    return base[name] !== undefined;
  };

  type UnitInputProps = {
    defaultValue?: number;
    defaultFormat?: U;
    onBlur: (value: Q) => void;
  };
  const Input = ({
    onBlur,
    defaultValue,
    defaultFormat = unitNames[0] as U,
  }: UnitInputProps) => {
    const [value, setValue] = useState(defaultValue);
    const [unit, setUnit] = useState(defaultFormat);
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setMenuAnchor(event.currentTarget);
    };
    const handleMenuClose = (newUnit?: U) => {
      setMenuAnchor(null);

      if (newUnit) {
        setUnit(newUnit);
        onBlur(convert(value ?? 0, newUnit))
      }
    };
    const unitChanged = (key: string) => {
      const unitOptions = unitNames.filter((unitName) => unitName.startsWith(key));
      if (unitOptions.length > 0) {
        setUnit(
          (unit) =>
            unitOptions[(unitOptions.indexOf(unit) + 1) % unitOptions.length]
        );
      }
    };
    return (
      <>
        <TextField
          variant="filled"
          type="number"
          value={value}
          onChange={({ target }) => {
            setValue(parseInt(target.value));
          }}
          onKeyPress={({ key }) => {
            unitChanged(key);
          }}
          onBlur={() => onBlur(convert(value ?? 0, unit))}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button size="small" onClick={handleMenuOpen}>
                  {unit}
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => handleMenuClose()}
        >
          {unitNames.map((unit) => (
            <MenuItem key={unit} onClick={() => handleMenuClose(unit)}>
              {unit}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  };
  return { convert, isUnit, Input };
};
