import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
	const uid =
		useSelector((state) => state.user.user?.uid) || localStorage.getItem("uid")


	if (!uid) {
		return <Navigate to={"/login"} />
	}
	return children
}

export default PrivateRoute
