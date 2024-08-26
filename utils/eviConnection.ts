import { fetchAccessToken } from "@humeai/voice";

export const connectToEVI = async (apiKey: string, clientSecret: string, configId: string) => {
  try {
    const accessToken = await fetchAccessToken({ apiKey, clientSecret });

    if (!accessToken) {
      throw new Error("Failed to obtain access token");
    }

    const socket = new WebSocket(`wss://api.hume.ai/v0/evi/chat?config_id=${configId}`);

    socket.onopen = () => {
      socket.send(JSON.stringify({
        type: "session_settings",
        auth: { type: "accessToken", value: accessToken }
      }));
    };

    return socket;
  } catch (error) {
    console.error("Error connecting to EVI:", error);
    throw error;
  }
};
