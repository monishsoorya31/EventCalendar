import React, { createContext, useState, useEffect } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <EventContext.Provider value={{ events, setEvents, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
