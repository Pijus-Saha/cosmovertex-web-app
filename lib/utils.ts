export { cn } from "cn";

/**
 * Normalizes a Bangladeshi phone number into the standard international format (880XXXXXXXXXX)
 * for reliable WhatsApp links and API calls.
 */
export function normalizeBdPhoneNumber(phone: string): string {
  if (!phone) return "";
  const digits = phone.replace(/[^0-9]/g, "");
  if (digits.startsWith("880")) return digits;
  if (digits.startsWith("0")) return `88${digits}`;
  if (digits.length === 10 && digits.startsWith("1")) return `880${digits}`;
  return digits;
}
