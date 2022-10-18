import React, { useState } from "react";
import Nav from "../component/Nav";
import "../styles/events.css";
import { EventDetails } from "../configsFiles/EventDetails";
import EventCard from "../component/EventCard";

const Events = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <div className="event-page">
      <div className={`${isopen ? "show" : "hide"} event-info`}>
        <h1 className="title">hey</h1>
      </div>
      <Nav />
      <div className="event-container">
        {EventDetails.map((EachDept) => {
          return (
            <>
              <div className="top">
                <div className="title">{EachDept.title}</div>
              </div>
              <div className="wrapper">
                {EachDept.eventslist.map((EachEvent) => {
                  return (
                    <EventCard
                      key={EachEvent.id}
                      {...EachEvent}
                      setIsOpen={setIsOpen}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
