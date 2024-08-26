import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: process.env.HUME_API_KEY!,
    clientSecret: process.env.HUME_CLIENT_SECRET!,
  });

  if (!accessToken) {
    throw new Error("Failed to obtain access token");
  }

  return accessToken;
};

