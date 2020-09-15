import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  console.log(roomId);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 4000));
  }, []);

  const SendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Name</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">javascript</span>
          <p>
            Hi javascript <span className="chat__timestamp">7.35am</span>
          </p>
        </div>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={SendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;

// https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/p960x960/64108294_2208751415912354_8225468073897885696_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=65fdwG4tfV4AX8eStSs&_nc_ht=scontent.fcmb10-1.fna&tp=6&oh=ef8978887471b4677610caaa7a6c5dec&oe=5F8476EB

// https://scontent.fcmb3-1.fna.fbcdn.net/v/t1.0-9/p960x960/64108294_2208751415912354_8225468073897885696_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=Nk2zcjKpMzoAX-VU9IN&_nc_ht=scontent.fcmb3-1.fna&tp=6&oh=16287ac618fed1972d01df3fcca4d85c&oe=5F7C8DEB

// https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-0/p370x247/119093832_2503028879987477_1339193534040497472_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=BGbepTP5g2YAX_y9qcN&_nc_ht=scontent.fcmb10-1.fna&tp=6&oh=76dfc4fb57a89b5ed6198627cff80df2&oe=5F865F1F

// https://scontent.fcmb10-1.fna.fbcdn.net/v/t1.0-9/p960x960/83496423_2430151020608597_4137577201030178002_o.jpg?_nc_cat=105&_nc_sid=7aed08&_nc_ohc=jfCamE2wiScAX_DG9vX&_nc_ht=scontent.fcmb10-1.fna&tp=6&oh=2c29157b066eee0d1d004681c3114299&oe=5F85257D
