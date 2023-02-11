import "./App.css";
import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { FaGitlab } from "react-icons/fa";
import EventList from "./components/EventList";
import Header from "./Header";
import Title from "./components/Title";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";

function App() {
	const [showModal, setShowModal] = useState(true);
	const [showEvents, setShowEvents] = useState(true);
	const [events, setEvents] = useState([]);

	// ADD NEW EVENT:

	const addEvent = (event) => {
		setEvents((prevEvents) => {
			return [...prevEvents, event];
		});
		setShowModal(true);
	};

	// CLICK HANDLERS:

	const handleClick = (id) => {
		setEvents((preEvents) => {
			return preEvents.filter((event) => {
				return id !== event.id;
			});
		});
	};

	// EVENT TITLE TEXT:

	const subtitle = "All the latest events listed here:";
	const title = "Events in your area";

	return (
		<div className="App">
			{/* HEADING: */}
			<Header />
			<Title title={title} subtitle={subtitle} />

			{/* SHOW AND HIDE BUTTONS: */}

			{showEvents && (
				<div className="hide">
					<button onClick={() => setShowEvents(false)}>
						Hide Events
						<BiHide color="black" size={20} />
					</button>
				</div>
			)}

			{!showEvents && (
				<div className="hide">
					<button onClick={() => setShowEvents(true)}>
						Show Events
						<FaGitlab color="black" size={25} />
					</button>
				</div>
			)}

			{/* MODAL POP UP FORM: */}

			{showModal && (
				<a
					href="#top"
					onClick={() => {
						setShowModal(false);
					}}
				>
					Add New Event
				</a>
			)}

			{/* LIST OF EVENTS: */}

			{showEvents && <EventList events={events} handleClick={handleClick} />}

			{/* POP UP BOX "MODAL": */}

			{/* <Modal>
				<h2>10% Off Coupon Code!!</h2>
				<p>Use the code TEAMSPK at checkout</p>
			</Modal> */}

			{!showModal && (
				<Modal isDynamicInline={true}>
					<NewEventForm addEvent={addEvent} />
				</Modal>
			)}
		</div>
	);
}

export default App;
