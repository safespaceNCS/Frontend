import  { useEffect, useState } from "react";
import axios from "axios";
// import { socket } from "./socket";

// function ChatBox() {
//   const [messages, setMessages] = useState([]);

//   // Fetch past messages once
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/messages");
//         setMessages(res.data);
//       } catch (err) {
//         console.error("Error loading messages:", err);
//       }
//     };
//     fetchMessages();
//   }, []);

//   // Listen to new incoming messages
//   useEffect(() => {
//     socket.on("chat message", (msg) => {
//       setMessages(prev => [...prev, msg]);
//     });
//     return () => socket.off("chat message");
//   }, []);

//   return (
//     <div className="chat-box">
//       {messages.map((msg, index) => (
//         <div key={index} className="chat-message">
//           <strong>{msg.sender}</strong>: {msg.text}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ChatBox;

function ChatBox({ messages }) {
  
  return (
    <div className="chat-box">
      {messages.map((msg, i) => (
        <div key={i} className="chat-message">
          <strong>{msg.sender}</strong>: {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
