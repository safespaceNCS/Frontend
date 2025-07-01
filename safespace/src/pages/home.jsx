import img from "../assets/img.png";
import R from "../assets/R.png"
import G4 from "../assets/G4.png";
import Gr5 from "../assets/Gr5.png";
import Gr76 from "../assets/Gr76.png";
import Gro7 from "../assets/Gro7.png";
import fr from "../assets/fr.png";
import people from "../assets/people.png";
const Home =()=>{
    const statistics = [{name:"Project",val:"7.000+"}, {name:"Partners",val:"3.00+"}, {name:"Experience",val:"24+"}]
    const features = [{title:"AI friend",img:G4},{title:"learn and play",img:Gr5},{title:"Report Anynomously",img:Gr76},{title:"Sypport System",img:Gro7}];
    return(<div className=" relative font-['Poppins'] overflow-auto scrollbar-hide ">

 {/* <button   className="fixed top-1/2 right-0 transform -translate-y-1/2 -rotate-90 origin-right z-50 bg-[#035CBA] text-white px-4 py-2 whitespace-nowrap text-sm rounded-md shadow-md w-max">
  Your privacy matters – your data is safe
</button>  */}
       <div className=" h-[100vh] flex flex-row justify-between  items-center gap-20 pr-20 pl-10 ">
            <img src={img} className="h-[70vh] self-center"/>
            <div className="w-[45%]">
                <div className="   font-['Playpen_Sans'] flex flex-row justify-end items-start gap-8 font-bold text-5xl text-[#035CBA]">
                    <div className="flex flex-col " >
                    <span >Welcome to </span>
                    <span className="text-xl">your safe space online </span>
                </div>
                <div className="flex flex-row items-end"><img src={R} className="h-15"/>
            <p className="text-4xl">afiqi</p>
</div>
                </div>
                
                <p className="text-[#032F5E99] font-['Poppins'] text-left my-4  place-self-end">is a secure and caring digital platform built to protect, educate, and empower kids and teens as they navigate the online world.<br/> We believe every young person deserves to explore the internet safely — with confidence, curiosity, and peace of mind. That’s why SafeNest offers a unique space where children and teenagers can learn how to recognize danger, express themselves freely, and get real support when something doesn’t feel right.<br/>
With interactive courses, fun activities, and a smart AI chatbot who listens and guides without judgment, 
Whether you're here to learn, talk, report, or protect, SafeNest is your safe space to grow</p>
              
                <div className="flex flex-row items-start font-bold text-xl gap-4 ">{statistics.map((x)=>(
                    <div className="flex flex-col ">
                        <p className=" text-[#035CBA]">{x.val}</p><p className="text-[#5E6282] font-semibold text-lg ">{x.name}</p></div>))}</div>
            </div>
        </div>
<div className="mx-20 ">
    <p className="font-bold font-['Playpen_Sans'] text-[#035CBA] text-3xl">What You’ll Find Inside</p>
 <p className="text-[#F7D65C] font-bold font-['Playpen_Sans'] text-xl my-2">Feature Highlights</p>
<div className="flex flex-row justify-start gap-8 mt-10 mb-30 ">{features.map((x)=>(<div className="flex flex-col items-center font-['Playpen_Sans'] gap-6"><img src={x.img} className="h-[30vh]"/><p className="text-[#035CBA] font-bold ">{x.title}</p></div>))}</div>
<p className="font-bold font-['Playpen_Sans'] text-[#035CBA] text-3xl">Why It Matters</p>
<p className="text-[#032F5E99] font-['Poppins'] text-left my-4  ">The internet can be an amazing place — but it’s not always kind. Many children face online bullying, manipulation, or fear. SafeNest exists to make sure that never happens alone. We’re here to protect, guide, and empower every young person to stand strong, learn smart, and grow in a safe digital space. That’s why SafeNest exists — to make sure no child ever feels alone online. We’ve created a space where young users can safely learn how to protect themselves, talk openly without fear of judgment, and get real support when they need it most. Our AI friend listens and responds with care. Our courses are designed to empower. Our reporting system is simple and safe. And parents and schools are part of the journey — aware, informed, and equipped to help.</p>
<p className="font-semibold text-[#035CBA] font-['Poppins']  mb-10">“I told the AI what happened and it really helped me. I didn’t    feel alone anymore.” – Teen, 13 years old</p>
<img src={fr} className="w-[40%] mb-10"/>
<p className="place-self-center  text-[#F7D65C] text-xl font-bold font-['Playpen_Sans'] text-center w-[70%] mb-30">Let’s build a safer, smarter online world — together. Whether you're here to learn, talk, report, or guide — SafeNest is ready for you.</p>

<img src={people} />
</div>

    </div>)
};export default Home;