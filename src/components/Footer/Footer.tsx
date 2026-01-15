export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-4 py-12 sm:px-6 lg:px-8 mx-auto ">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6">
            <svg viewBox="0 0 32 32" className="h-full w-full">
              <path d="M8 8 Q16 12 24 8 L24 24 Q16 20 8 24 Z" fill="#059669" opacity="0.2" />
              <path d="M8 8 Q16 12 24 8" stroke="#059669" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <span className="text-sm text-gray-600">© 2024 O&apos;Zeille. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};
