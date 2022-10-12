import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, asChild } = props;

  const Tag = asChild ? Slot : "button";

  return (
    <Tag
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm transition-colors hover:bg-cyan-300 w-full focus:ring-2 ring-white"
      )}
    >
      {children}
    </Tag>
  );
}
