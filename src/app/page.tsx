import { Widget } from "./components/Widget";

export default function Home() {
  return (
    <main className="h-screen bg-slate-50 dark:bg-black flex items-center justify-center dark:text-zinc-50 text-zinc-950">
      <Widget />
    </main>
  );
}
