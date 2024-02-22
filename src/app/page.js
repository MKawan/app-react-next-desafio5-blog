import Image from "next/image";
import Index from "./pages";
import PostPage from "./pages/posts/page";
import MyApp from "./pages/_app";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Index/>
    </main>
  );
}
