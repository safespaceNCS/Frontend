import circle from "../assets/circle.png";
import Chat from "../chat/chat";
import cry from '../assets/cry.png';
const bot =()=>{
    return(<div className="relative h-[100vh] w-screen overflow-hidden">
        <div className="z-10 absolute top-30 left-1/2 transform -translate-x-1/2 w-[100vw]">
  <Chat />
</div>
<img src={cry} className="absolute top-23  -right-5 h-[40%]"/>
        <img src={circle} className="absolute top-20 -right-50 h-[50%]"/>
    <img src={circle} className="absolute -bottom-10 -left-3 h-[50%]"/>
    <img src={circle} className="absolute top-60 right-50 h-[50%]"/>
    <img src={circle}className=" absolute -top-10 -left-20 h-[50%]" />
    <img src={circle}className="absolute -bottom-60 right-90 h-[50%]" /></div>);
};export default bot;