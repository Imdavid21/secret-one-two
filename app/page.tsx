import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const accessToken = await getHumeAccessToken();
  const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;

  if (!accessToken || !configId) {
    throw new Error("Missing required access token or config ID");
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} configId={configId} />
    </div>
  );
}
