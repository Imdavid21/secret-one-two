import { HumeClient } from "@humeai/voice";

export const connectToEVI = async (accessToken: string, configId: string) => {
  const client = new HumeClient({
    auth: { type: "accessToken" as const, value: accessToken },
  });

  const socket = await client.empathicVoice.chat.connect({
    configId: configId,
  });

  return socket;
};
