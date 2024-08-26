"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";
import StartCall from "./StartCall";
import { ComponentRef, useRef, useEffect, useState } from "react";
import { connectToEVI } from "@/utils/eviConnection";

export default function Chat({
  apiKey,
  secretKey,
  configId,
}: {
  apiKey: string;
  secretKey: string;
  configId: string;
}) {
  const timeout = useRef<number | null>(null);
  const ref = useRef<ComponentRef<typeof Messages> | null>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const initializeEVI = async () => {
      try {
        const eviSocket = await connectToEVI(apiKey, secretKey, configId);
        setSocket(eviSocket);
      } catch (error) {
        console.error("Failed to connect to EVI:", error);
      }
    };

    initializeEVI();
  }, [apiKey, secretKey, configId]);

  return (
    <div className={"relative grow flex flex-col mx-auto w-full overflow-hidden h-[0px]"}>
      {socket && (
        <VoiceProvider
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
      )}
    </div>
  );
}
