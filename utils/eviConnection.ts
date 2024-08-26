import { HumeClient } from "hume";
import { getHumeAccessToken } from "./yourCurrentFile"; // Adjust this import path as needed

export const connectToEVI = async (configId: string) => {
  const accessToken = await getHumeAccessToken();
  if (!accessToken) {
    throw new Error("Failed to obtain access token");
  }

  const client = new HumeClient({
    auth: { type: "accessToken", value: accessToken },
  });

  const socket = await client.empathicVoice.chat.connect({
    configId: "c8e9ef34-19da-4205-902c-e0cfc1eddb8a", // Add your config ID here
  });

  return socket;
};
