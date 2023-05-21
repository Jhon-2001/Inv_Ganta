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
							href="https://www.google.com/search?sxsrf=APwXEdehzSSuhcQAyK9KNG39WR2GG5eQMQ:1684390162187&q=Biserica+Ortodox%C4%83+%E2%80%9EAcoper%C4%83m%C3%A2ntul+Maicii+Domnului%E2%80%9D&ludocid=2048718172606929711&gsas=1&ibp=gwp;0,7&lsig=AB86z5VOza1F4JKxiBZ4i1WUfoln&kgs=9fe218505f4e23d1&shndl=-1&source=sh/x/kp/local/2#lpg=cid:CgIgAQ%3D%3D"
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
