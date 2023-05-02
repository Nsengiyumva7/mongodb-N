import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import CrudAdd from "./components/crud/CrudAdd";
import CrudTable from "./components/crud/CrudTable";
import CrudListView from "./components/crud/CrudListView";
import CrudGridView from "./components/crud/CrudGridView";
import CrudDetails from "./components/crud/CrudDetails";
import CrudEdit from "./components/crud/CrudEdit";
import CrudDelete from "./components/crud/CrudDelete";
import Footer from "./components/common/Footer";
import Log from "./components/pages/Log";

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Navbar /> */}

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/crud" element={<CrudTable />} />					
					<Route exact path="/crud/list-view" element={<CrudListView />} />
					<Route exact path="/crud/grid-view" element={<CrudGridView />} />
					<Route exact path="/crud/new" element={<CrudAdd />} />
					<Route exact path="/crud/:_id" element={<CrudDetails />} />
					<Route exact path="/crud/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/crud/:_id/delete" element={<CrudDelete />} />
					<Route exact path="/Log" element={<Log />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
