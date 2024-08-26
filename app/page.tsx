import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const accessToken = await getHumeAccessToken();
  if (!accessToken) {
    throw new Error("Failed to get access token");
  }

  const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;
  if (!configId) {
    throw new Error("EVI config ID is not set");
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} configId={configId} />
    </div>
  );
}
