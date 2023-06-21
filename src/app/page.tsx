import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="flex gap-6 py-5">
        <Link href="/" className="font-semibold">
          Music
        </Link>
        <Link href="/" className="font-semibold text-muted-foreground">
          Podcast
        </Link>
        <Link href="/" className="font-semibold text-muted-foreground">
          Live
        </Link>
        <Link href="/" className="font-semibold text-muted-foreground">
          Radio
        </Link>
      </div>
    </main>
  );
}
