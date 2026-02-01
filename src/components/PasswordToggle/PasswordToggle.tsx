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
      className={`absolute top-0 right-3 z-10 flex h-10 items-center p-1 text-gray-500 hover:text-gray-700 ${className}`}
      aria-label={isVisible ? "Masquer le mot de passe" : "Afficher le mot de passe"}>
      {isVisible ? <Eye size={20} /> : <EyeSlash size={20} />}
    </button>
  );
};
