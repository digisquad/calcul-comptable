import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
}

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const InputWithLabel = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, labelClassName, id, ...props }, ref) => {
    return (
      <div>
        <LabelPrimitive.Root
          htmlFor={id} // Add htmlFor attribute here
          className={cn(labelVariants(), labelClassName)}
        >
          {label}
        </LabelPrimitive.Root>
        <input
          id={id} // Ensure the id is set on the input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputWithLabel.displayName = "InputWithLabel";

export { InputWithLabel };
