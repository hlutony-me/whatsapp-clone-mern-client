import { useEffect, useState } from "react"
import "./App.css"
import Pusher from "pusher-js"

import axios from "axios"
import baseUrl from "./constant"
import ChatRoom from "./components/ChatRoom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider, useDispatch } from "react-redux"
import store from "./store"
import Login from "./components/Login"
import { login } from "./features/userSlice"
import PrivateRoute from "./components/PrivateRoute"

function App() {
	const [messages, setMessages] = useState()
	const dispatch = useDispatch()

	useEffect(() => {
		const localUid = localStorage.getItem("uid")
		const localPhoneNumber = localStorage.getItem("phoneNumber")
		if (localPhoneNumber && localUid) {
			dispatch(
				login({
					uid: localUid,
					phoneNumber: localPhoneNumber
				})
			)
		}
	})

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`${baseUrl}api/v1/messages`)
			setMessages(result.data)
		}

		try {
			fetchData()
		} catch (err) {
			console.log(err)
		}
	}, [])

	useEffect(() => {
		var pusher = new Pusher("dc491bcc4f77b739fa8a", {
			cluster: "us2"
		})

		var channel = pusher.subscribe("messages")
		channel.bind("insert", function (data) {
			setMessages([...messages, data.message])
		})

		return () => {
			pusher.unsubscribe("messages")
		}
	}, [messages])
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PrivateRoute>
								<ChatRoom messages={messages} />
							</PrivateRoute>
						}
					></Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
