import * as React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      className={`rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
