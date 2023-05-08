/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const Top = () => {
	return (
		<div className="main">
			{" "}
			<div className={styles.top}>
				<div className={styles.top__container}>
					<span className={styles.top__text}> Carina ❤️ Andrei </span>
				</div>
				<div className={styles.top__main}>
					{" "}
					<div className={styles.top__main__img_text}>
					<div className={styles.top__main__imgwrap}>Carina & Andrei</div>
						<p>20 August 2023, Târgu Mureș</p>
					</div>
					<img alt="bg" src="../bg1.jpg"></img>
				</div>
			</div>
			<div className={styles.timer}></div>
		</div>
	);
};

export default Top;
