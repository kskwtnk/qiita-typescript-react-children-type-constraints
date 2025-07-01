import type { ComponentProps } from "react";
import { Fragment, useId } from "react";

type Text = {
  text: string;
};

type Link = {
  text: string;
} & Omit<ComponentProps<"a">, "className" | "style">;

type Contents = Text | Link;

function isLink(item: Contents) {
  return "href" in item;
}

interface Props {
  contents: Contents[];
}

export function Checkbox5({ contents, ...props }: Props) {
  const id = useId();
  return (
    <div>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>
        {contents.map((content, index) =>
          isLink(content) ? (
            <a key={index} {...content}>
              {content.text}
            </a>
          ) : (
            <Fragment key={index}>{content.text}</Fragment>
          )
        )}
      </label>
    </div>
  );
}
