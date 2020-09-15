import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 4000));
  }, []);
  const CreateChat = () => {
      const roomName=prompt("please Enter name for chat");
      if(roomName){
          
      }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>RoomName</h2>
        <p>Last Message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={CreateChat}>
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
