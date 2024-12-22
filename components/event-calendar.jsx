"use client";

import { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
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

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{format(currentMonth, "MMMM yyyy")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}
          {daysInMonth.map((day) => {
            const dayEvents = events.filter(
              (event) =>
                format(new Date(event.date), "yyyy-MM-dd") ===
                format(day, "yyyy-MM-dd")
            );
            return (
              <div
                key={day.toString()}
                className={`p-2 border ${
                  dayEvents.length > 0 ? "bg-blue-100 dark:bg-blue-800" : ""
                }`}
              >
                <div className="text-center">{format(day, "d")}</div>
                {dayEvents.map((event) => (
                  <div key={event._id} className="text-xs truncate">
                    {event.name}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
