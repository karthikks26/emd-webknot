"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { EventForm } from "@/components/event-form";

export function EventList() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch events",
        variant: "destructive",
      });
    }
  };

  const deleteEvent = async (id) => {
    try {
      await fetch(`/api/events/${id}`, { method: "DELETE" });
      toast({
        title: "Success",
        description: "Event deleted successfully",
      });
      fetchEvents();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete event",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event._id}>
          <CardHeader>
            <CardTitle>{event.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{event.description}</p>
            <p>Location: {event.location}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <div className="flex space-x-2 mt-2">
              <Button onClick={() => setEditingEvent(event)}>Edit</Button>
              <Button
                onClick={() => deleteEvent(event._id)}
                variant="destructive"
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      {editingEvent && (
        <Card>
          <CardHeader>
            <CardTitle>Edit Event</CardTitle>
          </CardHeader>
          <CardContent>
            <EventForm
              event={editingEvent}
              onSuccess={() => {
                setEditingEvent(null);
                fetchEvents();
              }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
