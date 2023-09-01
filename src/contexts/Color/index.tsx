import { FC, JSX, createContext, useState } from "react";
import _colors from "../../data/colors";
import ColorContextType from "./types";
import ColorType from "../../components/Color/types";

export const ColorContext = createContext<ColorContextType>({
  colors: [],
  onAddColor: (color: ColorType) => {
    console.log(color);
  },
  onColorChange: (color: ColorType) => {
    console.log(color);
  },
  onDelete: (id: number) => {
    console.log(id);
  },
});

const ColorProvider: FC<{ children: JSX.Element[] }> = ({ children }) => {
  const [colors, setColors] = useState(_colors);

  const onAddColor = (color: ColorType): void =>
    setColors((colors) => [...colors, color]);

  const onColorChange = (color: ColorType): void =>
    setColors((colors) =>
      colors.map((_color) => (color.id == _color.id ? color : _color))
    );

  const onDelete = (id: number): void =>
    setColors((colors) => colors.filter((color) => color.id != id));

  return (
    <ColorContext.Provider
      value={{ colors, onAddColor, onColorChange, onDelete }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
