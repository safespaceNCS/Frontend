import { useState } from 'react';
import axios from 'axios';
import cpu from "../assets/cpu.png";
import { FaArrowUp } from "react-icons/fa";
import { useAuth } from '../authcontext';
const Chat = () => {
  const {token} =useAuth();
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can I help you today?", sender: "bot", time: "10:00 AM" },
  ]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      time: time
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsBotTyping(true);

    try {
      console.log(token);
     const res = await axios.post("http://192.168.43.143:5000/api/chat", 
  { message: input },
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
);

      const botMessage = {
        id: userMessage.id + 1,
        text: res.data.reply,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error("Error from backend:", err);
      setMessages(prev => [
        ...prev,
        {
          id: userMessage.id + 1,
          text: "Sorry, something went wrong on our side.",
          sender: "bot",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsBotTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col h-[70vh] w-[80vw] max-w-2xl mx-auto border border-gray-300 rounded-lg overflow-hidden bg-white font-['Poppins']">

      {/* Chat header */}
      <div className='border-b border-gray-500 w-full py-2 px-2 font-semibold flex justify-between items-center'>
        <span>RAFIQI</span>
        <img src={cpu} className='h-10 p-2 rounded-full bg-white' alt="Bot Icon" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-10 space-y-4">
        {messages.map(({ id, text, sender, time }) => {
          const isUser = sender === 'user';
          return (
            <div key={id} className={`flex ${isUser ? "justify-end" : "justify-start"} items-start`}>
              {!isUser && <img src={cpu} className='h-10 w-10 rounded-full bg-white mr-2' alt="Bot" />}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2 mb-1">
                  <span className='font-semibold text-sm'>{isUser ? "You" : "Rafiqi"}</span>
                  <p className="text-xs text-gray-500">{time}</p>
                </div>
                <div className="max-w-[80%] px-4 py-2 text-sm text-gray-600 rounded-xl bg-gray-100">
                  {text}
                </div>
              </div>
            </div>
          );
        })}
        {isBotTyping && (
          <div className="text-sm text-gray-500 italic">Rafiqi is typing...</div>
        )}
      </div>

      {/* Input */}
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
