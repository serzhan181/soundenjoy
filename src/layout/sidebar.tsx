import Link from "next/link";
import { Play } from "lucide-react";
import { navs } from "../config/nav";

export const Sidebar = () => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 z-50 flex justify-center w-48 h-screen py-6 border-r border-border">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xl font-semibold"
        >
          <Play size="24" />
          SoundEnjoy
        </Link>

        <div className="mt-6">
          <p className="text-lg font-semibold text-muted-foreground">Menu</p>

          <ul className="mt-3">
            {navs.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="flex items-center gap-2">
                  <n.icon className="w-4" /> {n.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
