import db from "../../utils/db";
import Invitat from "../../models/invitati.js";

export default async function handler(req, res) {
	try {
		await db.connectDb();

		const invitati = await Invitati.find();
		console.log(invitati);

		res.json({ invitati });
		// res.send("done");
	} catch (error) {
		console.log(error);
		res.json({ message: error.message });
	}
}
