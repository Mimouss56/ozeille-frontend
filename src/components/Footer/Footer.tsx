import { cva } from "class-variance-authority";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { Link } from "react-router";

const footerLinkStyles = cva("text-sm transition-colors", {
  variants: {
    variant: {
      default: "text-gray-600 hover:text-gray-900",
      social: "text-gray-500 hover:text-gray-700",
    },
  },
});

const footerLinks = {
  product: [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Sécurité", href: "#security" },
  ],
  company: [
    { name: "À propos", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carrières", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Support", href: "#" },
  ],
  legal: [
    { name: "Confidentialité", href: "#" },
    { name: "Conditions", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-sm font-semibold">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={footerLinkStyles()}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={footerLinkStyles()}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={footerLinkStyles()}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={footerLinkStyles()}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6">
              <svg viewBox="0 0 32 32" className="h-full w-full">
                <path d="M8 8 Q16 12 24 8 L24 24 Q16 20 8 24 Z" fill="#059669" opacity="0.2" />
                <path d="M8 8 Q16 12 24 8" stroke="#059669" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-sm text-gray-600">© 2024 O'Zeille. Tous droits réservés.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="#" className={footerLinkStyles({ variant: "social" })}>
              <TwitterLogo className="h-5 w-5" />
            </Link>
            <Link to="#" className={footerLinkStyles({ variant: "social" })}>
              <LinkedinLogo className="h-5 w-5" />
            </Link>
            <Link to="#" className={footerLinkStyles({ variant: "social" })}>
              <GithubLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
