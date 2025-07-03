import type { ComponentProps, ReactNode } from "react";
import { useId } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"input">;

export function Checkbox1({ children, ...props }: Props) {
  const id = useId();
  return (
    <div>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
