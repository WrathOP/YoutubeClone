import { ButtonHTMLAttributes, FC, ReactNode, forwardRef } from "react";
import { cn } from "../../constants/functions";
import Spinner from "./spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  isLoading?: boolean;
  loaderSize?: "small" | "medium";
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({ type, className, children, isLoading, loaderSize, ...rest }, ref) => {
  const typeOfButton = type || "button";

  return (
    <button
      ref={ref}
      type={typeOfButton}
      disabled={isLoading}
      className={cn(`  py-2 px-3   font-semibold rounded-lg text-sm focus:outline-none inline-flex justify-center items-center ${className}`)}
      {...rest}
    >
      {isLoading && <Spinner size={loaderSize} />} {children}
    </button>
  );
});

export default Button;
