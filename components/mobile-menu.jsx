"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          <Link href="/events" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              Events
            </Button>
          </Link>
          <Link href="/attendees" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              Attendees
            </Button>
          </Link>
          <Link href="/tasks" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">
              Tasks
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
