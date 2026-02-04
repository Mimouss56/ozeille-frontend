import { useCallback } from "react";

export const useScrollTo = () => {
  const handleScrollToSection = useCallback(
    (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return handleScrollToSection;
};
