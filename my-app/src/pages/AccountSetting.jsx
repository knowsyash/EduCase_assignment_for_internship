import React, { useState, useEffect } from "react";

const AccountSettings = () => {
  // Fetch user info from local storage (Assuming login/signup stores data)
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "Marry@gmail.com",
    bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
    profilePic: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch stored user data from local storage (If login/signup stores it)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setUser((prev) => ({ ...prev, profilePic: reader.result }));
        localStorage.setItem("user", JSON.stringify({ ...user, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
        
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={image || user.profilePic || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border"
            />
            <label className="absolute bottom-0 right-0 bg-purple-500 text-white p-1 rounded-full cursor-pointer">
              📷
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{user.fullName}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-700 mt-4">{user.bio}</p>
      </div>
    </div>
  );
};

export default AccountSettings;
