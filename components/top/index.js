/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const Top = () => {
	return (
		<div className="main">
			{" "}
			<div className={styles.top}>
				<div className={styles.top__container}>
					<span className={styles.top__text}> Andrei ❤️ Carina </span>
				</div>
				<div className={styles.top__main}>
					{" "}
					<div className={styles.top__main__img_text}>
						Andrei & Carina
						<p>20 August 2023, Targu Mureș</p>
					</div>
					<img alt="bg" src="../bg1.jpg"></img>
				</div>
			</div>
			<div className={styles.timer}></div>
		</div>
	);
};

export default Top;
