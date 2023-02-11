import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, isDynamicInline }) {
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "4px  solid",
					borderColor: isDynamicInline ? "rgb(89, 76, 95)" : "green",
					textAlign: "center",
				}}
			>
				{children}
			</div>
		</div>,
		document.body
	);
}

export default Modal;
