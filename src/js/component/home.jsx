import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [selectedLight, setSelectedLight] = useState("");

	//función para seleccionar aleatoriamente una luz
	const changeSelectedLight = () => {
		const lights = ["red", "yellow", "green"];
		const randomLight = lights[Math.floor(Math.random() * lights.length)];
		setSelectedLight(randomLight);
	};

	return (
		<>
			<div className="d-flex flex-column justify-content-center text-center align-items-center vh-100" style={{ backgroundColor: '#2c3e50' }}>
				<div className="bg-dark p-5 rounded-5" style={{ width: '140px', height: '380px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}>
					<div className="d-flex flex-column justify-content-between align-items-center h-100">
						<div
							className={`rounded-circle ${selectedLight === "red" ? "bg-danger" : "bg-secondary"}`}
							style={lightStyle}
							onClick={() => setSelectedLight("red")}
						></div>
						<div
							className={`rounded-circle ${selectedLight === "yellow" ? "bg-warning" : "bg-secondary"}`}
							style={lightStyle}
							onClick={() => setSelectedLight("yellow")}
						></div>
						<div
							className={`rounded-circle ${selectedLight === "green" ? "bg-success" : "bg-secondary"}`}
							style={lightStyle}
							onClick={() => setSelectedLight("green")}
						></div>
					</div>
				</div>
				<button
					className="btn btn-warning p-1 m-5"
					onClick={changeSelectedLight}>Cambiar Luz</button>
			</div>
		</>
	);
};


// Definimos los estilos básicos para las luces
const lightStyle = {
	width: '80px',
	height: '80px',
	boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
	transition: 'background-color 0.3s, box-shadow 0.3s'
};

const Home = () => {
	return (
		<div>
			<TrafficLight />
		</div>
	);
};

export default Home;
