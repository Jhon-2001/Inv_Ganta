import Head from "next/head";
import Image from "next/image";
import Top from "../components/top/index.js";
import Timer from "@/components/mid/timer.js";
import Heart from "@/components/mid/heart.js";
import styles from "../styles/Home.module.scss";
import Nasii from "@/components/mid/nasii.js";
import Detalii from "@/components/mid/detalii.js";
import Confirmare from "@/components/mid/confirmare.js";

export default function Home() {
	return (
		<div>
			<Top />
			<div className={styles.grid}>
				<div>
					<Timer />
				</div>
				<div>
					<Heart />
				</div>
			</div>{" "}
			<Nasii />
			<Detalii />
			
			<Confirmare />
		</div>
	);
}
