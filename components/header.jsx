import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Event Dashboard
          </Link>
          <div className="flex items-center">
            <nav className="hidden md:block mr-4">
              <ul className="flex space-x-4">
                <li>
                  <Button asChild variant="ghost b">
                    <Link href="/events">Events</Link>
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
            <ModeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
