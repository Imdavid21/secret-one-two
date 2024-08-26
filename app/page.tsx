import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const apiKey = process.env.HUME_API_KEY;
  const secretKey = process.env.HUME_SECRET_KEY;
  const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;

  if (!apiKey || !secretKey || !configId) {
    throw new Error("Missing required environment variables");
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat apiKey={apiKey} secretKey={secretKey} configId={configId} />
    </div>
  );
}
