import React, { useState, useMemo } from "react";
import circle from "../assets/circle.png";
import Preview from "../components/preview"
const data = [
  { name: "Belkharchouche", first: "Soundous", date: "July 1, 2024", status: "Seen", reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",} },
  { name: "Belkharchouche", first: "Soundous", date: "July 25, 2024", status: "Pending",  reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",} },
  { name: "Belkharchouche", first: "Soundous", date: "August 1, 2024", status: "Seen",  reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",} },
  { name: "Belkharchouche", first: "Soundous", date: "August 22, 2024", status: "Pending", reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",} },
  { name: "Belkharchouche", first: "Soundous", date: "August 29, 2024", status: "Pending",  reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",}  },
  { name: "Belkharchouche", first: "Soundous", date: "September 5, 2024", status: "Pending",  reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",} },
  { name: "Belkharchouche", first: "Soundous", date: "August 1, 2024", status: "Seen",  reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",} },
  { name: "Belkharchouche", first: "Soundous", date: "August 22, 2024", status: "Pending",  reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",}  },
  { name: "Belkharchouche", first: "Soundous", date: "August 29, 2024", status: "Pending",  reporting:{ where: "On Roblox", when: "2024-07-01",what: "Someone was being rude ",who: "A stranger",feeling: "😟",anonymous: "Yes",} },
];
//   const reportData = {
//     where: "On Roblox",
//     when: "2024-07-01",
//     what: "Someone was being rude ",
//     who: "A stranger",
//     feeling: "😟",
//     anonymous: "Yes",
//   };
 
const ReportsTable = () => {
    
    const [open,setOpen]=useState(false);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateSortOrder, setDateSortOrder] = useState("Newest");
 const [reportData,setReportData]=useState({});
  const opened =(x)=>{
    setReportData(x);
    console.log(x);
    setOpen(true);
  }
  const close =()=>{
    setReportData();
    setOpen(false)
  }
  const rowsPerPage = 7;
  const titles = ["first name", "report date", "status", "details"];

  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter((entry) => {
      return statusFilter === "All" || entry.status === statusFilter;
    });

    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateSortOrder === "Newest" ? dateB - dateA : dateA - dateB;
    });

    return filtered;
  }, [statusFilter, dateSortOrder]);

  const totalPages = Math.ceil(filteredAndSortedData.length / rowsPerPage);
  const currentData = filteredAndSortedData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="relative overflow-hidden h-[100vh] pt-20 font-['Inter'] px-20">
      <img src={circle} className="absolute -bottom-40 -right-50 h-[50%] -z-10" />
      <img src={circle} className="absolute -bottom-67 -right-0 h-[50%] -z-10" />

      <div className="flex flex-col mx-20 space-y-2">
        <p className="text-[#035CBA] font-bold text-2xl">Reports</p>

        
        <div className="flex flex-row text-sm text-gray-600 justify-between items-center">
          <p>View and manage all your reports.</p>
          <div className="flex items-center gap-4">
            <label>
              <span className="text-gray-500">Status:</span>
              <select
                className="ml-2 px-2 py-1 border rounded text-gray-700"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All</option>
                <option>Seen</option>
                <option>Pending</option>
              </select>
            </label>
            <label>
              <span className="text-gray-500">Sort by Date:</span>
              <select
                className="ml-2 px-2 py-1 border rounded text-gray-700"
                value={dateSortOrder}
                onChange={(e) => setDateSortOrder(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </label>
          </div>
        </div>

        {/* Table */}
        <div className="space-y-2 mt-6">
          <div className="grid grid-cols-4 bg-gray-100/50 text-sm text-gray-600 font-semibold border border-gray-300 py-2 justify-around items-center text-center rounded-lg">
            {titles.map((x, idx) => (
              <div key={idx}>{x}</div>
            ))}
          </div>

          {currentData.map((x, i) => (
            <div
              key={i}
              className="grid grid-cols-4 h-11 text-sm text-gray-600 font-semibold border border-gray-300 py-2 items-center text-center justify-around rounded-lg"
            >
              <div>{x.first}</div>
              <div>{x.date}</div>
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    x.status === "Seen"
                      ? "text-blue-700 bg-blue-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {x.status}
                </span>
              </div>
              <div>
                
                  <button onClick={()=>opened(x.reporting)} className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-500 rounded hover:bg-blue-50">
                    view 
                  </button>
                
              </div>
            </div>
          ))}

      
         {totalPages > 1 && (
  <div className="place-self-center   px-6 py-2 ">
    <div className="flex items-center justify-center space-x-2 text-sm">
        
      <button
        onClick={() => setPage((prev) => Math.min(prev - 1, totalPages))}
        disabled={page === 1}
        className={`w-8 h-8 rounded-md font-bold ${
          page === 1
            ? "hidden"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-8 h-8 rounded-md ${
            page === i + 1
              ? "bg-blue-600 text-white h-9 w-9"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {i + 1}
        </button>
      ))}

     
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className={`w-8 h-8 rounded-md font-bold ${
          page === totalPages
            ? "hidden"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        &gt;
      </button>
    </div>
  </div>
)}

        </div>
      </div>
  {open &&(  <div className="fixed top-0 left-0 w-full h-full bg-gray-900/60  flex justify-center items-center z-50">
            <button onClick={close} className="absolute top-[24vh] z-60 right-[26vw] font-bold">x</button>

            <Preview reportData={reportData} />
        
        </div>)}
    </div>
  );
};

export default ReportsTable;
