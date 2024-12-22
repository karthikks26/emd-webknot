import { EventList } from "@/components/event-list";
import { EventForm } from "@/components/event-form";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Event Management Dashboard</h1>
      <EventForm />
      <EventList />
    </div>
  );
}
