import circle from "../assets/circle.png"
const Preview = ({reportData}) => {
console.log(reportData)

  return (
    
    <div className="w-[50vw] h-[55vh] relative bg-white rounded-lg  px-6 py-8 ">
        {/* <img src={circle} className="absolute h-[30%] -top-30 -left-20 "/> */}
     <p className="text-[#035CBA] font-bold text-2xl mb-6"> Student Report</p>
     
      <div className="grid grid-cols-2 gap-6 text-sm">       
<div>
        <label className="block mb-1">Where did it happen?</label>
        <p className="p-2 rounded bg-gray-100">{reportData.where}</p>
      </div>

      <div>
        <label className="block mb-1">When did it happen?</label>
        <p className="p-2 rounded bg-gray-100">{reportData.when}</p>
      </div>

      <div>
        <label className="block mb-1">What happened?</label>
        <p className="p-2 rounded bg-gray-100">{reportData.what}</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">
          <span className="text-red-500 mr-1"></span>Who was involved?
        </label>
        <p className="p-2 rounded bg-gray-100">{reportData.who}</p>
      </div>

      <div>
        <label className="block mb-1">student feeling</label>
        <p className="text-2xl">{reportData.feeling}</p>
      </div>

      <div>
        <label className="block mb-1"> anonymous</label>
        <p className="p-2 rounded bg-gray-100">{reportData.anonymous}</p>
      </div>

  
    </div>
    </div>
  );
};

export default Preview;
