import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import Chat from './Chat'
import Sidebar from './Sidebar'

function ChatRoom({ messages }) {
    const user = useSelector(state=>state.user.user)
    return (
      
		<div className="app__body">
			<Sidebar />
			<Chat messages={messages} />
		</div>
	)
}

export default ChatRoom