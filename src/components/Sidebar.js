import { useSelect } from "@mui/base"
import {
	AccountCircle,
	ChatBubble,
	DonutLarge,
	MoreVert,
	SearchOutlined
} from "@mui/icons-material"
import { IconButton, Avatar } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import "./Sidebar.css"
import SideChat from "./SideChat"

const Sidebar = () => {
	const user = useSelector((state) => state.user.user)
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div>
					<Avatar className="sidebar__avatar" src="" />
				</div>
				<p className="sidebar__header__phone">{user?.phoneNumber}</p>
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLarge />
					</IconButton>
					<IconButton>
						<ChatBubble />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined />
					<form>
						<input
							className="sidebar__searchInput"
							placeholder="Search or start new chat"
							type="text"
						/>
					</form>
				</div>
			</div>
			<div className="sidebar__chats">
				<SideChat />
			</div>
		</div>
	)
}

export default Sidebar
