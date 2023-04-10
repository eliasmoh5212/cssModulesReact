import React from "react";
interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "Danger"
    | "Warning"
    | "Info"
    | "Light"
    | "Dark"
    | "Link";
  onClick: () => void;
}
export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
