import DOMPurify from "dompurify";

// Sanitize text to prevent XSS attacks
export const sanitizeText = (text: string) => {
  if (typeof window === "undefined") {
    // Trusted static copy from contentPage.ts; DOMPurify needs a DOM.
    return text;
  }

  return DOMPurify.sanitize(text);
};
