import { InputHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

// ========================== ROOT =================================
export interface TextInputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300 w-full"
    >
      {children}
    </div>
  );
}
TextInputRoot.displayName = "TextInput.Root";

// ========================== ICON =================================
export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  const { children } = props;
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

// ========================== INPUT =================================

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  const { ...rest } = props;

  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...rest}
    />
  );
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
