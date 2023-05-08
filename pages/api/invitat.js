import db from "../../utils/db";
import Invitat from "../../models/invitati.js";

export default async function handler(req, res) {
	try {
		await db.connectDb();

		const data = req.body.formData;
		const bool = req.body.confimare;

		const newInvitat = new Invitat({
			nume: data.nume,
			numar: data.numarPersoane,
			meniu: data.tipMeniu,
			mesaj: data.mesaj,
			confirmare: bool,
		});

		const datax = await newInvitat.save();

		res.json({ message: "Register success ! Please activate your email to start" });
		// res.send("done");
	} catch (error) {
		console.log(error);
		res.json({ message: error.message });
	}
}
