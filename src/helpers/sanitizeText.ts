import DOMPurify from "dompurify";

export const sanitizeText = (text: string) => {
  return DOMPurify.sanitize(text);
};
