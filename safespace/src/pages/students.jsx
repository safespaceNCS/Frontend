import React, { useState, useMemo, useEffect } from "react";
import circle from "../assets/circle.png";
import axios from "axios";
import { useAuth } from "../authcontext";

const ReportsTable = () => {
  const { token } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [flagFilter, setFlagFilter] = useState("All"); // All / Flagged / NotFlagged
  const [reportFilter, setReportFilter] = useState("All"); // All / Reported / NotReported

  const rowsPerPage = 7;
  const titles = ["First Name", "Age", "Flagged by AI", "Gave a Report"];

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("http://192.168.43.143:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [token]);

  const filteredData = useMemo(() => {
    return data.filter((entry) => {
      const matchesFlag =
        flagFilter === "All" ||
        (flagFilter === "Flagged" && entry.isFlagged) ||
        (flagFilter === "NotFlagged" && !entry.isFlagged);

      const matchesReport =
        reportFilter === "All" ||
        (reportFilter === "Reported" && entry.reportsCount > 0) ||
        (reportFilter === "NotReported" && entry.reportsCount === 0);

      return matchesFlag && matchesReport;
    });
  }, [data, flagFilter, reportFilter]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading students...</div>;
  }

  return (
    <div className="relative overflow-hidden h-[100vh] pt-20 font-['Inter'] px-20">
      <img src={circle} className="absolute -bottom-40 -right-50 h-[50%] -z-10" />
      <img src={circle} className="absolute -bottom-67 -right-0 h-[50%] -z-10" />

      <div className="flex flex-col mx-20 space-y-2">
        <p className="text-[#035CBA] font-bold text-2xl">Students</p>

        <div className="flex flex-row text-sm text-gray-600 justify-between items-center">
          <p>View and manage all your students and contribute to their wellbeing!</p>
          <div className="flex items-center gap-4">
            <label>
              <span className="text-gray-500">Flagged by AI:</span>
              <select
                className="ml-2 px-2 py-1 border rounded text-gray-700"
                value={flagFilter}
                onChange={(e) => {
                  setFlagFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="All">All</option>
                <option value="Flagged">yes</option>
                <option value="NotFlagged">no</option>
              </select>
            </label>
            <label>
              <span className="text-gray-500">Reported:</span>
              <select
                className="ml-2 px-2 py-1 border rounded text-gray-700"
                value={reportFilter}
                onChange={(e) => {
                  setReportFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="All">All</option>
                <option value="Reported">yes</option>
                <option value="NotReported">no</option>
              </select>
            </label>
          </div>
        </div>

        {/* Table */}
        <div className="space-y-2 mt-6">
          <div className="grid grid-cols-4 bg-gray-100/50 text-sm text-gray-600 font-semibold border border-gray-300 py-2 justify-around items-center text-center rounded-lg">
            {titles.map((title, idx) => (
              <div key={idx}>{title}</div>
            ))}
          </div>

          {currentData.map((x, i) => (
            <div
              key={i}
              className="grid grid-cols-4 h-11 text-sm text-gray-600 font-semibold border border-gray-300 py-2 items-center text-center justify-around rounded-lg"
            >
              <div>{x.name || "—"}</div>
              <div>{x.age || "—"}</div>
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    x.isFlagged
                      ? "text-blue-700 bg-blue-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {x.isFlagged ? "yes" : "no"}
                </span>
              </div>
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    x.reportsCount > 0
                      ? "text-blue-700 bg-blue-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {x.reportsCount > 0 ? "yes" : "no"}
                </span>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="place-self-center px-6 py-2">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className={`w-8 h-8 rounded-md font-bold ${
                    page === 1 ? "hidden" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
                    page === totalPages ? "hidden" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsTable;
