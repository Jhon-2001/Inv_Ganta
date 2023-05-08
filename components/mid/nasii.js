/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const Nasii = () => {
	return (
		<div className={styles.nasii}>
			<p className={styles.title}>Oamenii de suflet.</p>
			<p>Alături de care vom scrie povestea noastră.</p>
			<p className={styles.heart}> ❤️</p>
			<h2>împreună cu nașii</h2>
			<p>Cezar și Otilia Radu</p>
			<div className={styles.heart}> ❤️</div> <h2>Părinții</h2>
			<p>Lucian si Monica Zugravu</p>
			<p>Nicolae si Mihaela Gînța</p>
		</div>
	);
};

export default Nasii;
