import React from 'react'
import { Outlet } from 'react-router'
import UserChatComponent from './UserChatComponent'


const RoutesWithUserChatComponent = () => {
  return (
    <div>
      <UserChatComponent /> <Outlet />
    </div>
  )
}

export default RoutesWithUserChatComponent
