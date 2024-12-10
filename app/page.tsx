import Client from "./client";
import "@/config/envConfig";
export default function Home() {
  return (
    <>
      {process.env.NEXT_PUBLIC_VARIABLE}
      <Client />
    </>
  );
}
