import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudList() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getAllCruds() {
			try {
				const response = await axios.get("/crud");
				setCruds(response.data);
				console.log(cruds);
			} catch (error) {
				console.log("error", error);
			}
		}
		getAllCruds();
	}, []);

	return (
		<div>
			<h2>
				User
				<p>
					<Link to="/crud/new" className="btn btn-primary float-right">
						Create User
					</Link>
				</p>
			</h2>
			<hr />
			{cruds.map((crud) => {
				return (
					<div key={crud._id}>
						<h4>
							<Link to={`/crud/${crud._id}`}>{crud.companyName}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/crud/${crud._id}/edit`} className="btn btn-primary">
								Edit
							</Link>
						</div>

						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default CrudList;
