import { useState } from "react";
import styles from "./styles.module.scss";
import { runFireworks } from "@/lib/confetti";
import axios from "axios";
const Confirmare = () => {
	const [formData, setFormData] = useState({
		nume: "",
		numarPersoane: "Doua persoane",
		tipMeniu: "normal",
		mesaj: "",
		confimare: "",
	});
	const [bool, setBool] = useState();

	const handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		setFormData({
			...formData,
			confimare: bool,
		});
		console.log(formData);

		try {
			const res = await axios.post("/api/invitat", {
				formData,
				confimare: bool,
			});
			if (res && bool) {
				runFireworks();
				runFireworks();
				runFireworks();
			}
			setFormData({
				nume: "",
				numarPersoane: "Doua persoane",
				tipMeniu: "normal",
				mesaj: "",
				confimare: "",
			});
			window.scrollTo(0, 0); // scroll to top
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.confirmare}>
			<div className={styles.toptext}>
				<h1>Confirmare</h1>
				<p>Te așteptăm cu drag!</p>
				<p>Completează formularul de mai jos</p>
				<p>pentru a ne anunța decizia ta.</p>
				<p>Te rugăm să ne comunici decizia ta până</p>
				<p>la data de</p>
				<p>1 August 2023.</p>
			</div>
			<div className={styles.formular}>
				<form onSubmit={handleSubmit}>
					<label required htmlFor="nume">
						{!formData.nume && <p className={styles.error}>Vă rugăm introduceti numele</p>}
					</label>

					<input
						type="text"
						id="nume"
						name="nume"
						value={formData.nume}
						onChange={handleInputChange}
					/>

					<label htmlFor="numarPersoane">Numar persoane:</label>
					<select
						id="numarPersoane"
						name="numarPersoane"
						value={formData.numarPersoane}
						onChange={handleInputChange}
					>
						<option value="Doua persoane">Doua persoane</option>
						<option value="O persoana">O persoana</option>
					</select>

					<label htmlFor="tipMeniu">Tip meniu:</label>
					<select
						id="tipMeniu"
						name="tipMeniu"
						value={formData.tipMeniu}
						onChange={handleInputChange}
					>
						<option value="normal">Meniu normal</option>
						<option value="vegetarian">Meniu vegetarian</option>
						<option value="copii">Meniu copii</option>
					</select>

					<label htmlFor="mesaj">Vrei să ne transmiți ceva?</label>
					<textarea
						id="mesaj"
						name="mesaj"
						rows="5"
						value={formData.mesaj}
						onChange={handleInputChange}
					></textarea>

					<div className={styles.buttonscontainer}>
						<button type="submit" onClick={() => setBool(false)}>
							Nu pot să particip
						</button>
						<button type="submit" onClick={() => setBool(true)}>
							Da, confirm prezența
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Confirmare;
