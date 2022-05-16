import React, { useState } from "react"
import { IconButton, Avatar } from "@mui/material"
import "./Chat.css"
import {
	AttachFile,
	InsertEmoticon,
	MoreVert,
	SearchOutlined
} from "@mui/icons-material"
import Moment from "react-moment"
import axios from "axios"
import baseUrl from "../constant"
import { useSelector } from "react-redux"

const Chat = ({ messages }) => {
	const user = useSelector((state) => state.user.user)
	const [message, setMessage] = useState("")
	const sendMessage = async (e) => {
		e.preventDefault()
		console.log(user.phoneNumber)
		await axios.post(`${baseUrl}api/v1/messages/new`, {
			sender: user.phoneNumber,
			message: message
		})
		setMessage("")
	}
	const handleInputChange = (e) => {
		console.log(user.phoneNumber)
		setMessage(e.target.value)
	}
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar />
				<div className="chat__headerInfo">
					<h3>Room Name</h3>
					<p>Last Seen at...</p>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				{messages?.map((message) => (
					<p
						className={`chat__message ${
							user && message.sender === user?.phoneNumber && "chat__receiver"
						}`}
					>
						{user && message.sender !== user?.phoneNumber && (
							<span className="chat__name">{message.sender.substring(0,5)+'***'+message.sender.substring(8,12)}</span>
						)}
						{message.message}
						<span className="chat__timestamp">
							<Moment format="YYYY/MM/DD hh:mm">
								{new Date(message.createdAt)}
							</Moment>
						</span>
					</p>
				))}
			</div>
			<div className="chat__footer">
				<InsertEmoticon className="chat__emoji" />
				<form>
					<input
						placeholder="Type a message"
						type={"text"}
						value={message}
						onChange={(e) => handleInputChange(e)}
					/>
					<button onClick={sendMessage} type="submit">
						Send a message
					</button>
				</form>
			</div>
		</div>
	)
}

export default Chat
