import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: process.env.HUME_API_KEY!,
    secretKey: process.env.HUME_SECRET_KEY!,
  });

  if (!accessToken) {
    throw new Error("Failed to obtain access token");
  }

  return accessToken;
};
