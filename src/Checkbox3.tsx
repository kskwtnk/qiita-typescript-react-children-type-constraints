import type { ComponentProps, ReactNode } from "react";
import { Children, isValidElement, useId } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"input">;

const isValidChild = (child: unknown) => {
  return (
    typeof child === "string" || (isValidElement(child) && child.type === "a")
  );
};

export function Checkbox3({ children, ...props }: Props) {
  const id = useId();

  Children.forEach(children, (child, index) => {
    if (!isValidChild(child)) {
      throw new Error(
        `Invalid element at index ${index}. Only strings and <a> elements allowed.`
      );
    }
  });

  return (
    <div>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
