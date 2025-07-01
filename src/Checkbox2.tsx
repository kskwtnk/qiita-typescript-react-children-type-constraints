import type { InputHTMLAttributes, ReactElement } from "react";
import { useId } from "react";

type Props = {
  children: (string | ReactElement<any, "a">)[];
} & InputHTMLAttributes<HTMLInputElement>;

export function Checkbox2({ children, ...props }: Props) {
  const id = useId();
  return (
    <div>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
