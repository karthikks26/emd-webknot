import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Event Dashboard
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Button asChild variant="ghost">
                  <Link href="/">Events</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost">
                  <Link href="/attendees">Attendees</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost">
                  <Link href="/tasks">Tasks</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
