import React from "react"
import { IconButton, Avatar } from "@mui/material"
import "./Chat.css"
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@mui/icons-material"

const Chat = () => {
  const sendMessage = (e) => {
    e.preventDefault()
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
				<p className="chat__message">
					<span className="chat__name">Han</span>This is a message
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat__message chat__reciever">
					<span className="chat__name">Han</span>This is a message
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon className="chat__emoji"/>
        <form>
          <input placeholder="Type a message" type={"text"} />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
      </div>
		</div>
	)
}

export default Chat
