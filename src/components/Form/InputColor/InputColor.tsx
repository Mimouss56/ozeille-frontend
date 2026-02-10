import { generateRandomColor } from "./useColor";

interface InputColorProps {
  id?: string;
  value?: string;
  onChange: (color: string) => void;
  className?: string;
  label?: string;
}

export const InputColor = ({ id, value = generateRandomColor(), onChange, className = "", label }: InputColorProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div className={`h-10 w-10 overflow-hidden rounded-full ${className}`}>
        <input
          id={id}
          type="color"
          className="h-full w-full cursor-pointer border-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
