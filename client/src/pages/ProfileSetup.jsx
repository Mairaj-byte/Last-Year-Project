import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    niche: "",
    instagram: "",
    youtube: "",
    followersCount: "",
    engagementRate: "",
    location: "",
    pricePerPost: ""
  });

  const [profileImage, setProfileImage] = useState(null);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/profile/me",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data) {
          setFormData({
            username: res.data.username || "",
            bio: res.data.bio || "",
            niche: res.data.niche || "",
            instagram: res.data.socialLinks?.instagram || "",
            youtube: res.data.socialLinks?.youtube || "",
            followersCount: res.data.followersCount || "",
            engagementRate: res.data.engagementRate || "",
            location: res.data.location || "",
            pricePerPost: res.data.pricePerPost || ""
          });
        }
      } catch (err) { }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("username", formData.username);
    formDataToSend.append("bio", formData.bio);
    formDataToSend.append("niche", formData.niche);
    formDataToSend.append(
      "socialLinks",
      JSON.stringify({
        instagram: formData.instagram,
        youtube: formData.youtube
      })
    );
    formDataToSend.append("followersCount", formData.followersCount);
    formDataToSend.append("engagementRate", formData.engagementRate);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("pricePerPost", formData.pricePerPost);

    if (profileImage) {
      formDataToSend.append("profileImage", profileImage);
    }

    try {
      await axios.post(
        "http://localhost:4000/api/profile",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      toast.success("Profile completed successfully");
      navigate("/influencerdash");
    } catch (err) {
      toast.error("Profile save failed");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-start px-3">
      <div className="w-full max-w-2xl p-5 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
          Creator Profile ✨
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Tell brands who you are and what you create
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <textarea
            name="bio"
            placeholder="Short bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
          />

          <input
            name="niche"
            placeholder="Niche (Fitness, Tech, Fashion)"
            value={formData.niche}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="instagram"
              placeholder="Instagram URL"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              name="youtube"
              placeholder="YouTube URL"
              value={formData.youtube}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="followersCount"
              type="number"
              placeholder="Followers"
              value={formData.followersCount}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              name="engagementRate"
              placeholder="Engagement %"
              value={formData.engagementRate}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              name="pricePerPost"
              type="number"
              placeholder="Price per post ($)"
              value={formData.pricePerPost}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />

          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300"
          />


          <button
            type="submit"
            className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition shadow-md"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
