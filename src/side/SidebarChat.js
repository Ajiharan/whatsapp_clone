import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { db } from "../firebase";
import firebase from "firebase";
import { Link } from "react-router-dom";

const SidebarChat = ({ addNewChat, name, id }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 4000));
  }, []);
  const CreateChat = () => {
    const roomName = prompt("please Enter name for chat");
    if (roomName) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      db.collection("rooms").add({
        name: roomName,
        timestamp,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last Message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={CreateChat}>
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
