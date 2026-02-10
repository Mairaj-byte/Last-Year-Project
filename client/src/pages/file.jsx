import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      } catch (err) {}
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:4000/api/profile",
        {
          username: formData.username,
          bio: formData.bio,
          niche: formData.niche,
          socialLinks: {
            instagram: formData.instagram,
            youtube: formData.youtube
          },
          followersCount: formData.followersCount,
          engagementRate: formData.engagementRate,
          location: formData.location,
          pricePerPost: formData.pricePerPost
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate("/influencer-dashboard");
    } catch (err) {
      alert("Profile save failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Creator Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
          />

          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm min-h-[90px] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="niche"
              placeholder="Niche"
              value={formData.niche}
              onChange={handleChange}
              className="input"
            />
            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="input"
            />
          </div>

          <input
            name="instagram"
            placeholder="Instagram URL"
            value={formData.instagram}
            onChange={handleChange}
            className="input"
          />

          <input
            name="youtube"
            placeholder="YouTube URL"
            value={formData.youtube}
            onChange={handleChange}
            className="input"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              name="followersCount"
              type="number"
              placeholder="Followers"
              value={formData.followersCount}
              onChange={handleChange}
              className="input"
            />
            <input
              name="engagementRate"
              placeholder="Engagement %"
              value={formData.engagementRate}
              onChange={handleChange}
              className="input"
            />
          </div>

          <input
            name="pricePerPost"
            type="number"
            placeholder="Price per post"
            value={formData.pricePerPost}
            onChange={handleChange}
            className="input"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.01] transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
