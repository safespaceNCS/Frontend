import  {useState}  from "react";
// import { socket } from "./socket";

// function MessageInput() {
//   const [message, setMessage] = useState("");
//   const [sender, setSender] = useState("");

//   const sendMessage = () => {
//     if (!message.trim() || !sender.trim()) return;

//     socket.emit("chat message", {
//       text: message,
//       sender,
//     });

//     setMessage("");
//   };

//   return (
//     <div className="message-input">
//       <input
//         type="text"
//         placeholder="Your name"
//         value={sender}
//         onChange={(e) => setSender(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Type your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default MessageInput;

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");

  const sendMessage = () => {
    if (!message.trim() || !sender.trim()) return;

    const newMessage = { sender, text: message };
    onSend(newMessage);
    setMessage("");
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Your name"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;
