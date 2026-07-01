/**
 * Centralized API base URL for the Website.
 * Reads from NEXT_PUBLIC_API_URL env var, falls back to Railway production backend.
 */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://ua-engineering-pte-ltd-backend-production.up.railway.app";
