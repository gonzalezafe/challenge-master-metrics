import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ListScreen from "../product/screens/ListScreen";
import ItemDetails from "../product/screens/subcomponents/ItemDetails";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact component={ListScreen} path="/items" />

			<Route exact component={ItemDetails} path="/items/:id" />

			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
