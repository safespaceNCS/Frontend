import { useState, useCallback } from 'react';
import { FiUpload, FiFile, FiX } from 'react-icons/fi';
import third from '../assets/third.png';
import circle from "../assets/circle.png"
import { redirect } from 'react-router';
import axios from 'axios'
import { useAuth } from '../authcontext';
const StudentManagement = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
const token =useAuth();
  // Handle drag events
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // Handle file drop
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, []);

  // Handle file selection via input
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  // Process the uploaded file
  const handleFile = (file) => {
    if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && 
        file.type !== 'application/vnd.ms-excel') {
      alert('Please upload an Excel file (.xlsx or .xls)');
      return;
    }
    
    setFile(file);

    setIsLoading(true);
    setTimeout(() => {

      setIsLoading(false);
    }, 1500);
  };

  // Remove selected file
  const removeFile = () => {
    setFile(null);
    setStudents([]);
  };

  // Submit the file
  const handleSubmit = async() => {
    const formData=new FormData();
formData.append('file',file)
    try{
        const res= await axios.post("http://192.168.43.143:5000/api/bulk-users/children/bulk-create",formData,
            {'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,})
          console.log("good");
        }catch(err){console.log(err)}
    alert(`File "${file.name}" submitted successfully!`);
    
  };

  return (<div className='h-[100vh] overflow-hidden px-20 pt-20 grid grid-cols-2 relative '>
    <div className="   p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#035CBA] mb-2">Directory</h1>
        <p className="text-lg text-gray-600 mb-4">Manage all your Students in one click!</p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className=" font-semibold text-gray-700 mb-4">Student's list</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed 
          </p>
          
          <div className="border-b border-gray-200 mb-6"></div>
          
          {/* Drag and drop area */}
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="flex flex-col items-center">
                <div className="flex items-center bg-gray-100 rounded-lg p-3 mb-4">
                  <FiFile className="text-blue-500 mr-2" size={24} />
                  <span className="text-gray-700">{file.name}</span>
                  <button 
                    onClick={removeFile}
                    className="ml-4 text-gray-500 hover:text-red-500"
                  >
                    <FiX size={20} />
                  </button>
                </div>
                {isLoading ? (
                  <div className="text-blue-500">Processing file...</div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            ) : (
              <>
                <FiUpload className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Drag and drop your Excel file here
                </h3>
                <p className="text-gray-500 mb-4">or</p>
                <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg inline-block transition-colors">
                  Choose your files
                  <input 
                    type="file" 
                    className="hidden" 
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                  />
                </label>
              </>
            )}
          </div>
        </div>
        
    
      </div>
    </div>
    <img src={third} className='w-[20%] absolute top-50 right-30 ' />
    <img src={circle} className='absolute -bottom-90 -right-80 ' />
  </div>);
};

export default StudentManagement;