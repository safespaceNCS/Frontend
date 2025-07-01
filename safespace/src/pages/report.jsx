import { useForm } from "react-hook-form";
import useState from 'react';
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineSms } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const Report = () => {
    const contact=[{icon:<MdOutlineLocalPhone  className="text-xl  text-blue-700"/>,label:"phone",val:"0699516532"},{icon:< MdOutlineSms className="text-xl  text-blue-700"/>,label:"sms",val:"112"},{icon:<HiOutlineMail  className="text-xl  text-blue-700"/>,label:"Email",val:"help@company.dz"},{icon:<HiOutlineMail  className="text-xl  text-blue-700"/>,label:"Fax",val:"00966-11-434-6654"},{icon:<IoLocationOutline  className="text-xl  text-blue-700"/>,label:"location",val:"Constantine , Algeria"}]
    const Emergency=[{label:"Civil defence",num:"112"},{label:"Police",num:"14"},{label:"Ambulance",num:"19"}]
     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };
    return(<div className="h-[100vh] p-20 pt-25 flex flex-row justify-between font-['Inter'] ">
        <div className="w-[60%]"><p>Home <span className='text-gray-500'> &gt; report</span></p>
        <p className="font-bold text-2xl mb-8">Something made you feel uncomfortable?</p>
        <p>Whether it happened online, in a game, on social media, or in real life  if someone made you feel unsafe, scared, or confused, you're in the right place. You don’t need to share your name if you don’t want to. Just be honest & we’ll take care of the rest. 💙</p>
         <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-4 grid grid-cols-2 gap-6 text-sm"
    >
 
      <div>
        <label className="block mb-1">Where did it happen?</label>
        <input
          type="text"
          placeholder="On Roblox"
          {...register("where", { required: true })}
          className="w-full p-2 rounded bg-gray-100 outline-none"
        />
        {errors.where && ( <p className="text-red-500 text-xs mt-1">This field is required</p>)}
      </div>

     
      <div>
        <label className="block mb-1">When did it happen?</label>
        <input
          type="date"
          {...register("when")}
          className="w-full p-2 rounded bg-gray-100 outline-none"
        />
      </div>

      
      <div>
        <label className="block mb-1">What happened?</label>
        <input
          type="text"
          placeholder="On Roblox"
          {...register("what", { required: true })}
          className="w-full p-2 rounded bg-gray-100 outline-none"
        />
        {errors.what && (
  <p className="text-red-500 text-xs mt-1">This field is required</p>)}
      </div>

      
      <div>
        <label className="block mb-1 font-medium">
          <span className="text-red-500 mr-1">*</span>Who was involved?
        </label>
        <input
          type="text"
          placeholder="stranger"
          {...register("who", { required: true })}
          className="w-full p-2 rounded bg-gray-100 outline-none"
        />
        {errors.who && (
          <p className="text-red-500 text-xs mt-1">This field is required</p>
        )}
      </div>

     
      <div>
        <label className="block mb-1">How are you feeling right now?</label>
        <div className="flex gap-3 text-2xl">
          {["😡", "😳", "😟", "😅", "😁"].map((emoji, index) => (
            <label key={index}>
              <input
                type="radio"
                value={emoji}
                {...register("feeling")}
                className="hidden"
              />
              <span className="cursor-pointer">{emoji}</span>
            </label>
          ))}
        </div>
      </div>

     
      <div>
        <label className="block mb-1">Do you want to stay anonymous?</label>
        <select
          {...register("anonymous")}
          className="w-full p-2 rounded bg-gray-100 outline-none"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

    
      {/* <div className="col-span-2">
        <label className="block mb-1">
          Do you want us to notify your parent or school about this?
        </label>
        <textarea
          rows={3}
          placeholder="Placeholder text"
          {...register("notify")}
          className="w-1/2 p-2 rounded bg-gray-100 outline-none"
        />
      </div> */}

      
      <div className="col-span-2 ">
        <button
          type="submit"
          className="bg-[#035CBA]  text-white px-6 py-2 mt-6 rounded"
        >
          Submit Report
        </button>
      </div>
    </form>
        </div>
        <div className="h-[90%] w-[30%] ">
            <div className="flex flex-col items-start border-b border-gray-300 p-2 mb-4">
                <p className="font-semibold  text-gray-700 mb-4 ">Contact Hotline</p>
            {contact.map((x)=>(<div className="flex flex-row  items-start m-2 ml-0 gap-4 text-sm">{x.icon}<div className="flex flex-col self-start "><p className="font-bold">{x.label}</p><p className="text-[#035CBA]">{x.val}</p></div></div>)) }
            </div>
            <div>
                  <div className="flex flex-col items-start   p-2 mb-4"><p className="font-semibold  text-gray-700 mb-4 ">Emergency Contacts</p>
            { Emergency.map((x)=>(<div className="flex flex-row mb-2 gap-2 font-semibold text-sm text-[#161616]  ">{x.label}<span className="text-[#035CBA] font-medium">{x.num}</span></div>))}
           <p className="text-[#035CBA] text-sm">view more</p>
            </div></div>
        </div>
        
    </div>);
};export default Report;