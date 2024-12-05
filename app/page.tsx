import Client from "./client";

export default function Home() {
  return (
    <>
      {process.env.NEXT_PUBLIC_VARIABLE}
      <Client />
    </>
  );
}
