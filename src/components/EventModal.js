import React, { useState, useContext, useEffect } from "react";
import { EventContext } from "../context/EventContext";

const EventModal = ({ selectedDate, onClose }) => {
  const { addEvent } = useContext(EventContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [recurrence, setRecurrence] = useState("None");
  const [color, setColor] = useState("#007bff"); // default bootstrap blue

  useEffect(() => {
    if (selectedDate) {
      // Format date for input[type="date"] => yyyy-mm-dd
      setDate(selectedDate.toISOString().split("T")[0]);
    }
  }, [selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent({
      id: Date.now(),
      title,
      date: `${date}T${time}`,
      description,
      recurrence,
      color,
    });

    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Event</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Event Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Time</label>
              <input
                type="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Recurrence</label>
              <select
                className="form-select"
                value={recurrence}
                onChange={(e) => setRecurrence(e.target.value)}
              >
                <option value="None">None</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Custom">Custom</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Event Color</label>
              <input
                type="color"
                className="form-control form-control-color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                title="Choose your color"
              />
            </div>
          </div>

            

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
