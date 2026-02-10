import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/profile/${id}`
        );
        const data = await res.json();

        if (data.success) {
          setProfile(data.profile);
        }
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Profile not found
      </div>
    );
  }

  const {
    username,
    bio,
    niche,
    followersCount,
    engagementRate,
    location,
    pricePerPost,
    profileImage,
    socialLinks,
  } = profile;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <img
            src={
              profileImage ||
              "https://ui-avatars.com/api/?name=" + username
            }
            alt={username}
            className="w-32 h-32 rounded-full object-cover border"
          />

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{username}</h1>
            <p className="text-gray-500">{location}</p>

            <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full bg-gray-100">
              {niche}
            </span>

            <p className="mt-4 text-gray-600">
              {bio || "No bio provided"}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-6 text-center">
              <div>
                <p className="text-lg font-semibold">
                  {followersCount?.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>

              <div>
                <p className="text-lg font-semibold">
                  {engagementRate}%
                </p>
                <p className="text-sm text-gray-500">Engagement</p>
              </div>

              <div>
                <p className="text-lg font-semibold">
                  ₹{pricePerPost}
                </p>
                <p className="text-sm text-gray-500">Per Post</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8">
              <button className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                Hire Creator
              </button>

              {socialLinks?.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Instagram
                </a>
              )}

              {socialLinks?.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-lg border hover:bg-gray-100"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProfileDetail;
