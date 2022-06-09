import React from "react";

const CounterView = ({ counter, setCounter }) => {
	const handleClick = () => {
		setCounter(counter + 1);
	};
	console.log("rendered child");
	return (
		<div>
			{counter}
			<button onClick={handleClick}>Add 1</button>
		</div>
	);
};

export default CounterView;
