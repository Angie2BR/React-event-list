import "./NewEventForm.css";
import React, { useState } from "react";

function NewEventForm({ addEvent }) {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("new york");
	const resetForm = () => {
		setTitle("");
		setDate("");
		setLocation("new york");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const event = {
			title: title,
			date: date,
			location: location,
			id: Math.floor(Math.random() * 10000),
		};
		console.log(event);
		addEvent(event);
		resetForm();
	};

	return (
		<form className="new-event-form" onSubmit={handleSubmit}>
			<label>
				<span>Event Title:</span>
				<input
					type="text"
					placeholder="Enter event title here"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</label>
			<label>
				<span>Event Date:</span>
				<input
					type="date"
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
			</label>
			<label>
				<span> Event Location </span>
				<select onChange={(e) => setLocation(e.target.value)}>
					<option value="new york">New York</option>
					<option value="new orleans">New Orleans</option>
					<option value="los angeles">Los Angeles</option>
				</select>
			</label>
			<button>Submit</button>
		</form>
	);
}

export default NewEventForm;
