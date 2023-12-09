import React from "react";
import Nav from "./Nav";
import HogCollection from "./HogsCollection";

import hogs from "../porkers_data";

function App() {

	return (
		<div className="App">
			<Nav />
			<HogCollection hogData={hogs} />
		</div>
	);
}

export default App;
