import styles from "./styles.module.scss";

import React, { useEffect, useState } from "react";
import { calculateDiff } from "./utils";

export default function Countdown({ date }) {
	const [timeinMs, setTimeInMs] = useState(date.getTime());

	const [remaingTime, setRemainingTime] = useState();

	useEffect(() => {
		setTimeInMs(date.getTime());
	}, [date]);

	useEffect(() => {
		const interval = setInterval(() => {
			updateReamningTime(timeinMs);
		}, 1000);
		return () => clearInterval(interval);
	}, [timeinMs]);

	const updateReamningTime = (timeInMs) => {
		setRemainingTime(calculateDiff(timeInMs));
	};
	return (
		<div className={styles.timer}>
			<div className={styles.text}>
				<h1>Ne căsătorim !</h1>
				<p>Te invităm la nunta noastră !</p>
				<p className={styles.text}>
					Ne dorim din suflet să ne poți fii alături și să marcăm împreună ziua în care destinele
					noastre vor merge pe același drum.
				</p>
			</div>
			<div className={styles.cutdown}>
				<div>
					{" "}
					<span>
						{[...Array(remaingTime?.days.length).keys()].map((date, i) => (
							<span key={i}>{remaingTime?.days.slice(i, i + 1)}</span>
						))}
					</span>
					<p>Zile</p>
				</div>
				<div>
					<span>
						{remaingTime?.hours.slice(0, 1)}
						{remaingTime?.hours.slice(1, 2)}
					</span>
					<span></span>
					<p>Ore</p>
				</div>
				<div>
					<span>
						{remaingTime?.minutes.slice(0, 1)}
						{remaingTime?.minutes.slice(1, 2)}
					</span>
					<span></span>
					<p>Minute</p>
				</div>
				<div>
					<span>
						{remaingTime?.seconds.slice(0, 1)}
						{remaingTime?.seconds.slice(1, 2)}
					</span>
					<span></span>
					<p>Secunde</p>
				</div>
			</div>
		</div>
	);
}
