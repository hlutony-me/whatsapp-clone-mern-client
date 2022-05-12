import {
	AccountCircle,
	ChatBubble,
	DonutLarge,
	MoreVert,
  SearchOutlined
} from "@mui/icons-material"
import { IconButton, Avatar } from "@mui/material"
import React from "react"
import "./Sidebar.css"
import SideChat from "./SideChat"

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar src="" />
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
          <input placeholder="Search or start new chat" type={"text"}/>
        </div>
      </div>
      <div className="sidebar__chats">
        <SideChat/>
      </div>
		</div>
	)
}

export default Sidebar
