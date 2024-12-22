import { EventForm } from "@/components/event-form";
import { EventList } from "@/components/event-list";

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Event Management</h1>
      </div>
      <EventForm />
      <EventList />
    </div>
  );
}
