
// import ChatBox from "./chatbox";
// import MessageInput from "./messageInput";
// import { useState } from "react";
// // function App() {
// //   return (
// //     <div className="chat-container">
// //       <h2>💬 Real-time Chat App</h2>
// //       <ChatBox />
// //       <MessageInput />
// //     </div>
// //   );
// // }

// // export default App;


// function App() {
//   const [messages, setMessages] = useState([
//     { sender: "System", text: "Welcome to the chat!" }
//   ]);

//   const addMessage = (msg) => {
//     setMessages((prev) => [...prev, msg]);
//   };

//   return (
//     <div className="chat-container ">
//       <h2>💬 Local Chat Preview</h2>
//       <ChatBox messages={messages} />
//       <MessageInput onSend={addMessage} />
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import pfp from "../assets/pfp.jpg";
import robot from "../assets/robot.jpg";
import cpu from "../assets/cpu.png";
import { FaArrowUp } from "react-icons/fa";
const initialMessages = [
  { id: 1, text: "Hi there! How can I help you today?", sender: "bot",img:"", time: "10:00 AM" },
  { id: 2, text: "I'm concerned about online safety for my child.", sender: "user",img:"https://fr.pinterest.com/pin/415808978115162504/", time: "10:01 AM" },
  { id: 3, text: "I understand. We have great resources to help. What specifically are you worried about?", sender: "bot",img:"", time: "10:02 AM" },
  { id: 4, text: "Cyberbullying and inappropriate content.", sender: "user",img:"https://fr.pinterest.com/pin/415808978115162504/", time: "10:03 AM" },
  { id: 5, text: "We have interactive modules on both topics. Would you like me to show you?", sender: "bot",img:"", time: "10:04 AM" },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col h-[70vh] w-[80vw] max-w-2xl mx-auto border border-gray-300 rounded-lg overflow-hidden  bg-white font-['Poppins']">

      {/* Chat header */}
      <div className='border-b border-gray-500 w-full py-2 px-2 font-semibold flex fmex-row justify-between items-center'><span>RAFIQI</span>   <img src={cpu} className='h-10 p-2 rounded-full bg-white'/> </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-10 space-y-4">
        {messages.map(({ id, text, sender, time,img }) => {
          const isUser = sender === 'user';
          return (
            <div key={id} className={`flex  flex-row justify-start items-start `}>
               <img src={cpu} className='h-14 p-2 rounded-full bg-white'/>
             <div className='flex flex-col '> <div className='flex flex-row  items-center gap-2 m-2'><span className='font-semibold text-sm '>{isUser?"You":"Rafiqi"}</span> <p className={`text-xs  text-gray-500`}>{time}</p></div>
              <div className={`max-w-[80%] px-4 py-2 text-sm text-gray-600 rounded-xl bg-gray-100`}>
                <p>{text}</p>
               
              </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-gray-300 bg-white">
       <div className="relative flex items-center">
  <input
    type="text"
    placeholder="Type your message..."
    className="flex-1 border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={handleKeyDown}
  />
  <button
    onClick={handleSend}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#035CBA] text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
  >
    <FaArrowUp />
  </button>
</div>

      </div>
    </div>
  );
};

export default Chat;
