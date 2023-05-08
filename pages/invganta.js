import { useState, useEffect } from "react";
// import styles from "./styles.module.scss";
import axios from "axios";
import db from "../utils/db";
import Invitat from "../models/invitati.js";
// import styles from "./styles.module.scss";
import styles from '../styles/inv.module.scss'

const Table = ({ data }) => {
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		setTableData(data);
	}, [data]);

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Nume</th>
					<th>Numar</th>
					<th>Meniu</th>
					<th>Mesaj</th>
					<th>Confirmare</th>
					<th>Data Confirmare</th>
				</tr>
			</thead>
			<tbody>
				{tableData.map((row) => (
					<tr key={row._id}>
						<td>{row.nume}</td>
						<td>{row.numar}</td>
						<td>{row.meniu}</td>
						<td>{row.mesaj}</td>
						<td>{row.confirmare ? "Particip " : "Nu Particip"}</td>
						<td> {new Date(row.createdAt).toLocaleDateString()}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;

export async function getServerSideProps() {
	await db.connectDb();
	const data = await Invitat.find();

	return { props: { data: JSON.parse(JSON.stringify(data)) } };
}
