import { ChangeEvent, FC, forwardRef, useEffect, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { cn } from "../../constants/functions";

interface FormInputProps {
  label?: string;
  type?: string;
  id?: string | number;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  className?: string;
  showIcon?: boolean;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  debounceTime?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  disabled?: boolean;
  onKeyDown?: any;
  onKeyUp?: any;
}

const Input: FC<FormInputProps> = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      placeholder,
      onChange,
      type,
      value,
      className,
      showIcon,
      onBlur,
      disabled,
      onKeyDown,
      onKeyUp,
      debounceTime = undefined,
    }: FormInputProps,
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

    useEffect(() => {
      if (debounceTime && onChange) {
        if (timer) {
          clearTimeout(timer);
        }
        setTimer(
          setTimeout(
            () =>
              onChange({
                target: { value: inputValue },
              } as ChangeEvent<HTMLInputElement>),
            debounceTime
          )
        );
      }
    }, [inputValue]);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      if (!debounceTime && onChange) {
        onChange(event);
      }
    };

    return (
      <>
        {label && <p className=" font-bold text-xs ml-3 mb-1">{label}</p>}
        <div className={cn(` inline-flex border border-[#e0e0e0] rounded-lg w-full  ${showIcon ? "" : ""}`)}>
          {showIcon && <img src={SearchIcon} className="ml-1" />}
          <input
            value={inputValue}
            ref={ref}
            type={type || "text"}
            onChange={handleChange}
            disabled={disabled}
            onBlur={onBlur}
            placeholder={`${placeholder || label || ""}`}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            className={cn(`border-none rounded-lg outline-none text-sm px-3 py-1 ${className}`)}
          />
        </div>
      </>
    );
  }
);

export default Input;
