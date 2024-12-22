import { AttendeeList } from "@/components/attendee-list";
import { AttendeeForm } from "@/components/attendee-form";

export default function AttendeesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Attendee Management</h1>
      <AttendeeForm />
      <AttendeeList />
    </div>
  );
}
