"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function AttendeeList() {
  const [attendees, setAttendees] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    try {
      const response = await fetch("/api/attendees");
      const data = await response.json();
      setAttendees(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch attendees",
        variant: "destructive",
      });
    }
  };

  const deleteAttendee = async (id) => {
    try {
      await fetch(`/api/attendees/${id}`, { method: "DELETE" });
      toast({
        title: "Success",
        description: "Attendee deleted successfully",
      });
      fetchAttendees();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete attendee",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {attendees.map((attendee) => (
        <Card key={attendee._id}>
          <CardHeader>
            <CardTitle>{attendee.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: {attendee.email}</p>
            <Button
              onClick={() => deleteAttendee(attendee._id)}
              variant="destructive"
              className="mt-2"
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
