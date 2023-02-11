import React from "react";
import { TiDelete } from "react-icons/ti";
import styles from "./EventList.module.css";

function EventList({ events, handleClick }) {
	return (
		<div>
			{events.map((event, index) => (
				<div className={styles.card} key={event.id}>
					<h2>
						Event # {index} - {event.title}
						<p>Date: {event.date}</p>
						<p>Location: {event.location}</p>
					</h2>

					<TiDelete
						onClick={() => handleClick(event.id)}
						color="rgb(89, 76, 95)"
						size={45}
					/>
				</div>
			))}
		</div>
	);
}

export default EventList;
