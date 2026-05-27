import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonType =
  | "default"
  | "primary"
  | "secondary"
  | "disabled"
  | "tab"
  | "link";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> {
  children: ReactNode;
  type?: ButtonType;
  className?: string;
}

const Button = ({
  children,
  type = "default",
  className = "",
  disabled = false,
  ...rest
}: ButtonProps) => {
  const isDisabled = type === "disabled" || disabled;

  const baseStyles =
    "inline-flex cursor-pointer items-center justify-center text-sm font-semibold transition-colors duration-200";

  const sizeStyles: Record<ButtonType, string> = {
    default: "rounded-full px-6 py-3",
    primary: "rounded-full px-6 py-3",
    secondary: "rounded-full px-6 py-3",
    disabled: "rounded-full px-6 py-3",
    tab: "rounded-none px-4 py-4",
    link: "rounded-none px-0 py-0",
  };

  const variantStyles: Record<ButtonType, string> = {
    default:
      "bg-[var(--cta-bg-default)] text-slate-700 border border-[var(--cta-border-default)] hover:bg-[var(--cta-h-bg-default)] active:border-[var(--cta-h-border-default)]",
    primary:
      "bg-[var(--cta-bg-primary)] text-white border border-[var(--cta-border-primary)] hover:bg-[var(--cta-h-bg-primary)] active:border-[var(--cta-h-border-primary)]",
    secondary:
      "bg-[var(--cta-bg-secondary)] text-white border border-[var(--cta-border-secondary)] hover:bg-[var(--cta-h-bg-secondary)] active:border-[var(--cta-h-border-secondary)]",
    disabled:
      "bg-[var(--cta-bg-disabled)] text-slate-500 cursor-not-allowed pointer-events-none border border-[var(--cta-border-disabled)] hover:bg-[var(--cta-h-bg-disabled)] active:border-[var(--cta-h-border-disabled)]",
    tab: " text-black border-b border-[var(--cta-border-tab)] hover:bg-[var(--cta-h-bg-tab)] active:border-[var(--cta-h-border-tab)]",
    link: "text-brand",
  };

  const buttonClasses =
    `${baseStyles} ${sizeStyles[type]} ${variantStyles[type]} ${className}`.trim();

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
