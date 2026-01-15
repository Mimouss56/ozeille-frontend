import type { ZodError } from "zod";

// Convertir une erreur Zod en un objet simple { champ: "Message d'erreur" }
export const formatZodErrors = (error: ZodError): Record<string, string> => {
  const formattedErrors: Record<string, string> = {};

  error.issues.forEach((issue) => {
    const fieldName = String(issue.path[issue.path.length - 1]);
    formattedErrors[fieldName] = issue.message;
  });

  return formattedErrors;
};
