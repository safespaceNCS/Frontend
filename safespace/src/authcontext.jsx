import { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [userinfo, setUserinfo] = useState({});
  const [user, setUser] = useState({role:"teen"});

  useEffect(() => {
    // Retrieve authentication details
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role) {
      setUser({ token, role });
    }

     // Retrieve additional user info
    const storedUser = {
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      address: localStorage.getItem("address"),
      email: localStorage.getItem("email"),
      phoneNumber: localStorage.getItem("phoneNumber"),
      gender: localStorage.getItem("gender"),
      dateOfBirth: localStorage.getItem("dateOfBirth"),
      placeOfBirth: localStorage.getItem("placeOfBirth"),
      photo: localStorage.getItem("photo"),
      matricule: localStorage.getItem("matricule"),
      yearOfStudy: localStorage.getItem("yearOfStudy"),
      jobTitle: localStorage.getItem("jobTitle"),
      specialization: localStorage.getItem("specialization"),
      yearsOfExperience: localStorage.getItem("yearsOfExperience"),
      workSchedules: localStorage.getItem("workSchedules"),
      workingHours: safelyParse(localStorage.getItem("workingHours")) // ✅ safely parsed
    };

    const hasStoredData = Object.values(storedUser).some((val) => val !== null);
    if (hasStoredData) {
      setUserinfo(storedUser);
    }
  }, []);

  // ✅ Safe JSON.parse
  const safelyParse = (value) => {
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  };

  // ✅ Updates user info and stores JSON if needed
  const updateUserInfo = (key, value) => {
    if (key && value !== undefined) {
      const valueToStore = typeof value === "object" ? JSON.stringify(value) : value;
      localStorage.setItem(key, valueToStore);
      setUserinfo((prev) => ({ ...prev, [key]: value }));
    }
  };
 

  const login = (token, role, firstName, lastName, address, email, phoneNumber, gender, dateOfBirth, placeOfBirth, photo, matricule,yearOfStudy,jobTitle,specialization,yearsOfExperience,workSchedules) => {
    // Store authentication details
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    // Store user info
    const userInfo = { firstName, lastName, address, email, phoneNumber, gender, dateOfBirth, placeOfBirth, photo, matricule,yearOfStudy,jobTitle,specialization,yearsOfExperience,workSchedules};
    Object.entries(userInfo).forEach(([key, value]) => {
      if (value) {
        localStorage.setItem(key, value);
      }
    });

    // Update states
    setUser({ token, role });
    setUserinfo(userInfo);
  };
  
  const logout = () => {
    localStorage.clear();
    setUser(null);
    setUserinfo({});
  };

  return (
    <AuthContext.Provider value={{ user, userinfo,updateUserInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth
export const useAuth = () => useContext(AuthContext);
