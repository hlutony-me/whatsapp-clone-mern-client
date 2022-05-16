import React from 'react'
import { IconButton, Avatar } from "@mui/material"
import './SideChat.css'

const SideChat = () => {
  return (
      <div className='sideChat'>
          <Avatar />
          <div className="sideChat__info">
              <h2>Room Name</h2>
              <p>This is the last one</p>
      </div>

    </div>
  )
}

export default SideChat