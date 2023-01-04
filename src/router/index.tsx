import React from "react";
import {
	createBrowserRouter,
} from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);
