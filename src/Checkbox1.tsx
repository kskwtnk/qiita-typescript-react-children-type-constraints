import type { InputHTMLAttributes, ReactNode } from "react";
import { useId } from "react";

type Props = {
  children: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function Checkbox1({ children, ...props }: Props) {
  const id = useId();
  return (
    <div>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
