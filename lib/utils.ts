import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const bookConsultation = () => {
  // Logic to handle booking a consultation, e.g., redirecting to a booking page
  window.open("https://cal.com/exploraview", "_blank");
};
