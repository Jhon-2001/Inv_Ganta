import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const invitatSchema = new mongoose.Schema(
	{
		nume: {
			type: String,
		},
		numar: {
			type: String,
		},
		meniu: {
			type: String,
		},
		mesaj: {
			type: String,
		},
		confirmare: {
			type: Boolean,
		},
	},
	{
		timestamps: true,
	}
);
const Invitat = mongoose.models.Invitat || mongoose.model("Invitat", invitatSchema);

export default Invitat;
