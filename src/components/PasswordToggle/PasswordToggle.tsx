import { Eye, EyeSlash } from "phosphor-react";

type PasswordToggleProps = {
  isVisible: boolean;
  onToggle: () => void;
  className?: string;
};

export const PasswordToggle = ({ isVisible, onToggle, className = "" }: PasswordToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`absolute right-3 top-0 h-10 flex items-center text-gray-500 hover:text-gray-700 z-10 p-1 ${className}`}
      aria-label={isVisible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
    >
      {isVisible ? <Eye size={20} /> : <EyeSlash size={20} />}
    </button>
  );
};