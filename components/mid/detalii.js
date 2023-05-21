/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";

const Detalii = () => {
	return (
		<div>
			<p className={styles.titledetalii}>Detaliile evenimentului:</p>
			<p className={styles.cand}>Când și unde ?</p>
			<div className={styles.grid}>
				<div className={styles.card}>
					<img alt="bg" src="../card1.jpeg"></img>

					<div className={styles.toptext}>
						{" "}
						<p>Cununia religioasă</p>
						<p>Duminică, 20 August 2023</p>
						<p>Ora 12:00</p>
					</div>
					<div className={styles.bottext}>
						{" "}
						<p>Acoperământul Maicii Domnului</p>
						<p>Strada Salcâmilor Nr. 20</p>
						<p>Târgu Mureș, România</p>
						<a
							target="_blank"
							href="https://www.google.com/maps/uv?pb=!1s0x474bb77d16770a49%3A0x1c6e8252cb1f9b2f!3m1!7e115!4s%2Fmaps%2Fplace%2FBiserica%2BOrtodox%25C4%2583%2B%25E2%2580%259EAcoper%25C4%2583m%25C3%25A2ntul%2BMaicii%2BDomnului%25E2%2580%259D%2F%4046.541071%2C24.5405089%2C3a%2C75y%2C70.45h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sM2WvdhB9NsLWx8QqrBR32g*212e0*214m2*213m1*211s0x474bb77d16770a49%3A0x1c6e8252cb1f9b2f%3Fsa%3DX!5zQmlzZXJpY2EgT3J0b2RveMSDIOKAnkFjb3BlcsSDbcOibnR1bCBNYWljaWkgRG9tbnVsdWnigJ0gLSBDxIN1dGFyZSBHb29nbGU!15sCgIgAQ&imagekey=!1e2!2sM2WvdhB9NsLWx8QqrBR32g&hl=ro&sa=X&ved=2ahUKEwjoo9DplYf_AhWSO-wKHZGGBA8Qpx96BAhJEAw"
						>
							Vezi pe hartă →{" "}
						</a>
					</div>
				</div>
				<div className={styles.card}>
					<img alt="bg" src="../card2.jpeg"></img>

					<div className={styles.toptext}>
						{" "}
						<p>Petrecerea</p>
						<p>Duminică, 20 August 2023</p>
						<p>Ora 14:00</p>
					</div>
					<div className={styles.bottext}>
						{" "}
						<p>Business Conference Hotel</p>
						<p>Bulevardul 1 Decembrie 1918, Nr. 250</p>
						<p>Târgu Mureș, România</p>
            <span></span>
						<a
							target="blank"
							href="https://www.google.com/maps/place/Business+Conference+Hotel/@46.5273597,24.5961714,17z/data=!4m9!3m8!1s0x474bb71b44c9b263:0x99cdbfb1d464d3e1!5m2!4m1!1i2!8m2!3d46.527356!4d24.5983601!16s%2Fg%2F1hf7j92wp?coh=164777&entry=tt&shorturl=1"
						>
						 	Vezi pe hartă →{" "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detalii;
