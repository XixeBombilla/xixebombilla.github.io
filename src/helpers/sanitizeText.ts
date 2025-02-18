import DOMPurify from "dompurify";

// Sanitize text to prevent XSS attacks
export const sanitizeText = (text: string) => {
  return DOMPurify.sanitize(text);
};
