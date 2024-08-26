"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";
import StartCall from "./StartCall";
import { ComponentRef, useRef, useEffect, useState } from "react";
import { connectToEVI } from "../utils/eviConnection";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  const timeout = useRef<number | null>(null);
  const ref = useRef<ComponentRef<typeof Messages> | null>(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const initializeEVI = async () => {
      const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;
      if (!configId) {
        console.error("EVI config ID is not set");
        return;
      }
      try {
        const eviSocket = await connectToEVI(accessToken, configId);
        setSocket(eviSocket);
      } catch (error) {
        console.error("Failed to connect to EVI:", error);
      }
    };

    initializeEVI();
  }, [accessToken]);

  return (
    <div
      className={
        "relative grow flex flex-col mx-auto w-full overflow-hidden h-[0px]"
      }
    >
      <VoiceProvider
        auth={{ type: "accessToken", value: accessToken }}
        socket={socket}
        onMessage={() => {
          if (timeout.current) {
            window.clearTimeout(timeout.current);
          }
          timeout.current = window.setTimeout(() => {
            if (ref.current) {
              const scrollHeight = ref.current.scrollHeight;
              ref.current.scrollTo({
                top: scrollHeight,
                behavior: "smooth",
              });
            }
          }, 200);
        }}
      >
        <Messages ref={ref} />
        <Controls />
        <StartCall />
      </VoiceProvider>
    </div>
  );
}
