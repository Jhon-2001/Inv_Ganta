import React from "react";
import styles from "./styles.module.scss";
import Countdown from "../countdown";

const Timer = () => {
	return (
		<div>
			<Countdown date={new Date(2023, 7, 21)} />
		</div>
	);
};

export default Timer;
