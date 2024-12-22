import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Users, CheckSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { EventCalendar } from "@/components/event-calendar";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Event Management Made Simple
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Streamline your event planning process with our comprehensive
                dashboard. Manage events, attendees, and tasks all in one place.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/events">
                <Button className="px-8">Get Started</Button>
              </Link>
              <Link href="/tasks">
                <Button variant="outline" className="px-8">
                  View Tasks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <CalendarDays className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Event Management</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Create and manage events with ease. Track dates, locations, and
                attendees all in one place.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Attendee Tracking</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Keep track of event attendees and assign them specific tasks or
                roles.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <CheckSquare className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Task Management</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Monitor task progress and ensure everything stays on schedule.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="container px-4 md:px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Upcoming Events</h2>
        <EventCalendar />
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12 bg-muted rounded-lg">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Start managing your events more efficiently today.
          </p>
          <Link href="/events">
            <Button className="px-8">
              Create Your First Event
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
